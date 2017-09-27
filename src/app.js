import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import * as WeChat from 'react-native-wechat';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'
import QrCodeScan from './pages/common/qrCodeScan'
import VideoView from './pages/common/videoView'
import GoodsDetail from './pages/store/goodsDetail'
import ChooseSeat from './pages/schedule/chooseSeat'
import Cinema from './pages/home/cinema'
import ScheduleList from './pages/schedule/scheduleList'

import './business/storage'
import './style/index'

const App = StackNavigator(
    {
        Welcome: { screen: Welcome },
        MainPage: { screen: MainPage },
        QrCodeScan: { screen: QrCodeScan },
        VideoView: { screen: VideoView },
        GoodsDetail: { screen: GoodsDetail },
        Cinema: { screen: Cinema },
        ScheduleList: { screen: ScheduleList },
        ChooseSeat:{screen:ChooseSeat},
    },
    {
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
        }
    });
export default App 