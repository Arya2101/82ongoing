import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'; 
import SettingsScreen from './screens/SettingsScreen';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  SettingsScreen:{screen: SettingsScreen},

})

const AppContainer =  createAppContainer(switchNavigator);
