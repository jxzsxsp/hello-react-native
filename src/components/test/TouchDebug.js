/**
 * Created by Sean on 2016/5/18.
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    ScrollView,
    TouchableHighlight,
    Text,
} from 'react-native';

export default class TouchDebug extends Component {
    render() {
        return (
            <ScrollView>
                <TouchableHighlight onPress={() => console.log('pressed')}>
                    <Text>Proper Touch Handling</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}