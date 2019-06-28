import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "./HomeScreen.js";
import ProfileScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    
  }
);
export default createAppContainer(HomeScreenRouter);
