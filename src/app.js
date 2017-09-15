import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'
import * as WeChat from 'react-native-wechat';

const App = StackNavigator(
    {
        MainPage: { screen: MainPage },
        Welcome: { screen: Welcome }
    },
    {
        navigationOptions: {
            header: null,
        }
    });

// WeChat.registerApp('appid');
export default App