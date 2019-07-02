/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DrawerNavigator } from 'react-navigation';
import React, { Component } from "react";
import HomeScreen from "./src/HomeScreen/HomeScreen.js";
<<<<<<< HEAD
import MainScreenNavigator from "./src/HomeScreen/HomeScreen";
import ProfileScreen from "./src/HomeScreen/HomeScreen";
import SideBar from "./src/SideBar/SideBar.js";
import Restaurants from "./src/RestaurantList"
import { createDrawerNavigator, createAppContainer } from "react-navigation";


const HomeScreenRouter = createDrawerNavigator(
    {
        Home: { screen: Restaurants },
        Chat: { screen: MainScreenNavigator },
        ProfileScreen: { screen: ProfileScreen }
    }
);

export default createAppContainer(HomeScreenRouter);
=======
import Cart from "./src/Cart/Cart.js";
import {createStackNavigator, createAppContainer} from 'react-navigation';


const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Cart: {screen: Cart},
  });
  
  const AppNav = createAppContainer(MainNavigator);
  
  export default AppNav;
>>>>>>> cfbe1ca3e02873c5b24b37d26eb09597dde8f0cb
AppRegistry.registerComponent(appName, () => App);
