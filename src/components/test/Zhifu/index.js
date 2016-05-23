/**
 * Sample React Native App
 * https://github.com/hanks-zyh
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Navigator
} from 'react-native';

import Http from './Http';
import Shop from './Shop';
import ViewPager from './ViewPager';
import UserInfo from './UserInfo';
import News from './News';

let _navigator;

export default class Index extends Component {

    configureScenceAndroid() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderSceneAndroid(route, navigator) {
        _navigator = navigator;
        if (route.id === 'main') {
            return (
                <View>
                    <TouchableOpacity onPress={ () => _navigator.push({title:'Http',id:'http'}) }
                                      style={ styles.button }>
                        <Text>NetWork</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'Shop',id:'shop'})} style={ styles.button }>
                        <Text>SHOP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'ViewPager',id:'viewpager'})}
                                      style={ styles.button }>
                        <Text>ViewPager</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'UserInfoView',id:'userinfo'})}
                                      style={ styles.button }>
                        <Text>Userinfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'NewsView',id:'news'})}
                                      style={ styles.button }>
                        <Text>News</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        if (route.id === 'http') {
            return (
                <Http navigator={navigator} route={route}/>
            );
        }

        if (route.id === 'shop') {
            return (
                <Shop navigator={navigator} route={route}/>
            );
        }
        if (route.id === 'viewpager') {
            return (
                <ViewPager navigator={navigator} route={route}/>
            );
        }
        if (route.id === 'userinfo') {
            return (
                <UserInfo navigator={navigator} route={route}/>
            );
        }
        if (route.id === 'news') {
            return (
                <News navigator={navigator} route={route}/>
            );
        }
    }

    render() {
        var renderScene = this.renderSceneAndroid;
        var configureScence = this.configureScenceAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'Main', id:'main'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
                />
        );
    }
}

var styles = StyleSheet.create({
    button: {
        height: 56,
        margin: 10,
        backgroundColor: '#cad6c5',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
