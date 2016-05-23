/**
 * Created by Sean on 2016/5/18.
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

export default class TabBar extends Component {
    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item title="React Native" selected={true}>
                    <NavigatorIOS initialRoute={{ title: 'React Native' }}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}