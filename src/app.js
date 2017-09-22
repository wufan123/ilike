import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'
import QrCodeScan from './pages/common/qrCodeScan'
import VideoView from './pages/common/videoView'
import GoodsDetail from './pages/store/goodsDetail'
import * as WeChat from 'react-native-wechat';
import './business/storage'
import './style/index'

const App = StackNavigator(
    {
        Welcome: { screen: Welcome },
        MainPage: { screen: MainPage },
        QrCodeScan: { screen: QrCodeScan },
        VideoView: { screen: VideoView },
        GoodsDetail: { screen: GoodsDetail }
    },
    {
        navigationOptions: {
            header: null,
        }
    });
export default App 