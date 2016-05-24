'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class FlexBox extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#444444'}}>
                <View style={styles.box}>
                    <View style={styles.item}/>
                </View>
                <View style={styles.box2}>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                </View>
                <View style={styles.box3}>
                    <View style={styles.item}/>
                    <View style={styles.item32}/>
                    <View style={styles.item33}/>
                </View>
                <View style={styles.box4}>
                    <View style={styles.column41}>
                        <View style={styles.item}/>
                        <View style={styles.item}/>
                    </View>
                    <View style={styles.column42}>
                        <View style={styles.item}/>
                        <View style={styles.item}/>
                    </View>
                </View>
                <View style={styles.box4}>
                    <View style={styles.column41}>
                        <View style={styles.item}/>
                        <View style={styles.item}/>
                    </View>
                    <View style={styles.column52}>
                        <View style={styles.item}/>
                    </View>
                    <View style={styles.column42}>
                        <View style={styles.item}/>
                        <View style={styles.item}/>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    box: {
        padding: 5,
        height: 65,
        width: 65,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    item: {
        borderRadius: 7.5,
        height: 15,
        width: 15,
        backgroundColor: '#333333'
    },
    box2: {
        padding: 5,
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box3: {
        padding: 5,
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    item32: {
        borderRadius: 7.5,
        height: 15,
        width: 15,
        alignSelf: 'center',
        backgroundColor: '#333333'
    },
    item33: {
        alignSelf: 'flex-end',
        borderRadius: 7.5,
        height: 15,
        width: 15,
        backgroundColor: '#333333'
    },
    box4: {
        padding: 5,
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    column41: {
        justifyContent: 'space-between',
    },
    column42: {
        justifyContent: 'space-between',
    },
    column52: {
        justifyContent: 'center',
    },
});