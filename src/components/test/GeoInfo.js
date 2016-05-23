/**
 * Created by Sean on 2016/5/18.
 */
'use strict';

import React, {
    Component,
} from 'react';
import {
    Text,
} from 'react-native';

export default class GeoInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {position: 'unknown'};
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({position}),
            (error) => console.error(error)
        );
    }

    render() {
        return (
            <Text>
                Position: {JSON.stringify(this.state.position)}
            </Text>
        );
    }
}