import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomSideBarMenu from './CustomSideBarMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import SettingsScreen  from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Settings : {
    screen : SettingsScreen
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })