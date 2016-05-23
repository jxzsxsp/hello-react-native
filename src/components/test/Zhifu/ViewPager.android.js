'use strict'

import React, {
    Component,
} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
    ViewPagerAndroid,
    BackAndroid
} from 'react-native';

let PAGES = 5;
let BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
let IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

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

let _navigator;

export default class ViewPager extends Component {
    constructor(props) {
        super(props);
        _navigator = this.props.navigator;
        this.state = {
            page: 0,
            animationsAreEnabled: true,
            progress: {
                position: 0,
                offset: 0
            }
        };
    }

    onPageSelected(e) {
        this.setState({page: e.nativeEvent.position});
    }

    onPageScroll(e) {
        this.setState({progress: e.nativeEvent});
    }

    move(delta) {
        let page = this.state.page + delta;
        this.go(page);
    }

    go(page) {
        if (this.state.animationsAreEnabled) {
            this.viewPager.setPage(page);
        } else {
            this.viewPager.setPageWithoutAnimation(page);
        }

        this.setState({page});
    }

    render() {
        let pages = [];
        for (let i = 0; i < PAGES; i++) {
            let pageStyle = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                flex: 1,
                alignItems: 'stretch'
            };
            pages.push(
                <View key={i} style={pageStyle} collapsable={false}>
                    <Image
                        style={styles.image}
                        source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
                        />
                </View>
            );
        }
        let { page, animationsAreEnabled } = this.state;
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll.bind(this)}
                    onPageSelected={this.onPageSelected.bind(this)}
                    ref={viewPager => { this.viewPager = viewPager; }}>
                    {pages}
                </ViewPagerAndroid>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1,
    },
    viewPager: {
        flex: 1,
    },
});