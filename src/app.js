import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'
import QrCodeScan from './pages/common/qrCodeScan'
import VideoView from './pages/common/videoView'
import * as WeChat from 'react-native-wechat';
import './business/storage'
import './style/index'

const App = StackNavigator(
    {
        MainPage: { screen: MainPage },
        Welcome: { screen: Welcome },
        QrCodeScan: { screen: QrCodeScan },
        VideoView: { screen: VideoView }
    },
    {
        navigationOptions: {
            header: null,
        }
    });

// WeChat.registerApp('appid'); //注册wechat
export default App