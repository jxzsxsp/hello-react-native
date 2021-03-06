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
    Dimensions,
    IntentAndroid
} from 'react-native';

let _item;
let _navigator;
let _screenWidth;

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

export default class ImageList extends Component{

    constructor(props) {
        super(props);
        _navigator = this.props.navigator;
        _item = this.props.route.row;
        _screenWidth = Dimensions.get('window').width;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._getData())
        };
    }

    download(rowData) {
        if (rowData != null) {
            var url = rowData.link;
            IntentAndroid.canOpenURL(url, (supported) => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    IntentAndroid.openURL(url);
                }
            });
        }
    }

    _getData() {
        var datas = [];
        fetch('https://face.ersansan.cn/collection/' + _item.tid)
            .then((response) => response.text())
            .then((responseText) => {
                var jsonObject = eval("(" + responseText + ")");
                var array = jsonObject.picList;
                for (var i = 0; i < array.length; i++) {
                    var imageRow;
                    if (i % 3 == 0) {
                        imageRow = [];
                        datas.push(imageRow);
                    }
                    imageRow[i % 3] = array[i];
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

    render() {
        return (
            <ScrollView>
                <View>
                    <View
                        style={{ justifyContent:'center', alignItems:'center',backgroundColor:'#FFFF00' , height:56, }}>
                        <Text style={{    color:'#212121', fontSize:20,}}>{ _item.title }</Text>
                    </View>
                    <ListView dataSource={this.state.dataSource}
                              renderRow={(rowData) =>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                  <TouchableOpacity onPress={ ()=>this.download(rowData[0])}>
                    <Image source={{ uri: rowData[0].link }} style={{ width: _screenWidth/3-2, height: _screenWidth/3-2 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ ()=>this.download(rowData[1])}>
                    <Image source={{ uri: rowData[1] !=null ? rowData[1].link : 'http://www.hanks.xyz/1.png' }} style={{ width: _screenWidth/3-2, height: _screenWidth/3-2 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ ()=>this.download(rowData[2])}>
                    <Image source={{ uri: rowData[2] !=null ? rowData[2].link : 'http://www.hanks.xyz/1.png'}} style={{ width: _screenWidth/3-2, height: _screenWidth/3-2 }} />
                  </TouchableOpacity>
                </View>
            }/>
                </View>
            </ScrollView>
        );
    }
}