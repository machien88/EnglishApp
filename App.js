/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Routes from './routers/index';

export default class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Routes />
      </View>
    )
  }
}
