/**
 * Created by Sean on 2016/5/18.
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Loading extends Component {
    /*
     render() {
     return (
     <DrawerLayoutAndroid
     renderNavigationView={() => <Text>React Native</Text>}>
     <ProgressBarAndroid />
     </DrawerLayoutAndroid>
     );
     }
     */
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <TouchableHighlight onPress={() => this.refs.TEST.closeDrawer()}>
                    <Text>Close Drawer</Text>
                </TouchableHighlight>
            </View>
        );
        return (
            <DrawerLayoutAndroid ref={'TEST'}
                                 drawerWidth={100}
                                 drawerPosition={DrawerLayoutAndroid.positions.Left}
                                 renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableHighlight onPress={() => this.refs.TEST.openDrawer()}>
                        <Text>Open Drawer</Text>
                    </TouchableHighlight>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}