/**
 * 鬼畜表情
 * https://github.com/hakns-zyh
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    ListView,
    BackAndroid,
    Navigator
} from 'react-native';

import ImageList from './ImageList';

let _item;
let _navigator;

BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator == null) {
        return false;
    }
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    _navigator.pop();
    return true;
});

export default class SubList extends Component{

    constructor(props) {
        super(props);
        _navigator = this.props.navigator;
        _item = this.props.route.row;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._getData())
        };
    }

    _getData() {
        var datas = [];
        fetch('https://face.ersansan.cn/collection/' + _item.tid)
            .then((response) => response.text())
            .then((responseText) => {
                var jsonObject = eval("(" + responseText + ")");
                var array = jsonObject.subcollection;
                for (var i = 0; i < array.length; i++) {
                    datas.push(array[i]);
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(datas),
                    isLoading: false
                });
            })
            .catch((error) => {
                console.warn(error);
            }).done;
        return datas;
    }

    configureScenceAndroid() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderSceneAndroid(route, navigator) {
        if (route.id === 'subList') {
            return (
                <ScrollView>
                    <View>

                        <View style={{ justifyContent:'center', alignItems:'center',
             backgroundColor:'#FFFF00' , height:56, }}>
                            <Text style={{    color:'#212121', fontSize:20,}}>{ _item.title }</Text>
                        </View>
                        <ListView dataSource={this.state.dataSource}
                                  renderRow={(rowData) =>
                <TouchableOpacity onPress={() => navigator.push({ row:rowData,id:'imageList'})}  >
                  <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                    <Image source={{ uri: rowData.thumlink }} style={{height:80,width:80, margin:12,}} />
                    <Text style={{ marginTop:12, color:'#234', fontSize:16,}}>{rowData.title}</Text>
                    <Text style={{ margin:12, color:'#FFFF00', fontSize:24, }}>></Text>
                  </View>
                </TouchableOpacity>
              }/>
                    </View>
                </ScrollView>
            );
        }
        if (route.id === 'imageList') {
            return (
                <ImageList navigator={_navigator} route={route}/>
            );
        }
    }

    render() {
        var renderScene = this.renderSceneAndroid.bind(this);
        var configureScence = this.configureScenceAndroid.bind(this);
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ id:'subList'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
                />
        );
    }
}

var styles = StyleSheet.create({
    topImage: {
        flex: 1,
        alignSelf: 'stretch'
    },
    item: {},
    itemText: {
        alignSelf: 'center'
    },
    itemImage: {height: 90, width: 90, margin: 12,}
});