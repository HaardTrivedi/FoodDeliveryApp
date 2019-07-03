/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DrawerNavigator } from 'react-navigation';
import React, { Component } from "react";
import HomeScreen from "./src/HomeScreen/HomeScreen.js";
import Cart from "./src/Cart/Cart.js";
import Restaurants from "./src/RestaurantList.js"
import Menu from "./src/Menu.js"
import Payment from "./src/PaymentScreen.js"
import { createStackNavigator, createAppContainer } from 'react-navigation';


const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cart: { screen: Cart },
    Restaurants: {screen: Restaurants},
    Menu: {screen: Menu},
    Payment: {screen: Payment},
});

const AppNav = createAppContainer(MainNavigator);

export default AppNav;
AppRegistry.registerComponent(appName, () => App);
