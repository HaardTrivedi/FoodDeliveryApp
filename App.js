/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TextInput, Switch} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import Home from "./index.js";
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render () {
    return(
      <Home/>
    );
  }
}

