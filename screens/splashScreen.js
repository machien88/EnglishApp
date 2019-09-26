import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

export default class Splash extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }
    render() {
        return(
            <View></View>
        )
    }
}