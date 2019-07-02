/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DrawerNavigator } from 'react-navigation';
import React, { Component } from "react";
import HomeScreen from "./src/HomeScreen/HomeScreen.js";
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
AppRegistry.registerComponent(appName, () => App);
