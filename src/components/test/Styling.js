/**
 * Created by Sean on 2016/5/18.
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Styling extends Component {
    render() {
        return (
            <View style={styles.row}>
                <Image
                    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                    style={styles.image}
                    />
                <View style={styles.text}>
                    <Text style={styles.title}>
                        React Native
                    </Text>
                    <Text style={styles.subtitle}>
                        Build high quality mobile apps using React
                    </Text>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    row: {flexDirection: 'row', margin: 40},
    image: {width: 40, height: 40, marginRight: 10},
    text: {flex: 1, justifyContent: 'center'},
    title: {fontSize: 11, fontWeight: 'bold'},
    subtitle: {fontSize: 10},
});