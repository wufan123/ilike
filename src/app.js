import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'
import QrCodeScan from './pages/qr_code/qrCodeScan'
import * as WeChat from 'react-native-wechat';

const App = StackNavigator(
    {
        MainPage: { screen: MainPage },
        Welcome: { screen: Welcome },
        QrCodeScan: { screen: QrCodeScan },
    },
    {
        navigationOptions: {
            header: null,
        }
    });

// WeChat.registerApp('appid'); //注册wechat
export default App