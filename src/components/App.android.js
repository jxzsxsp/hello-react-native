'use strict';

import React, { Component } from 'react'
import Loading from './test/Loading'
import TouchDebug from './test/TouchDebug'
import Styling from './test/Styling'
import GeoInfo from './test/GeoInfo'
import ToastAndroidTest from './test/ToastAndroidTest'
import Shop from './test/Shop'
import Emoji from './test/Emoji/index'
import Zhifu from './test/Zhifu'
import Game2048 from './test/2048/Game2048'
import FlexBox from './test/FlexBox'
import {
    AlphabetListView,
    Button,
    CompositeListView,
    Icon,
    Radio,
    CountDown,
    ToolBar,
    TabNavigator,
    Indicator,
    Timeline,
    Swiper,
    ScrollTab
} from 'ls-rncomponent'

export default class App extends Component {
    render() {
        return (
            <FlexBox />
        );
    }
}
