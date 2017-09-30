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
import Login from './pages/login'
import ForgetPw from './pages/login/forgetPw'
import Register from './pages/login/register'
import ScheduleList from './pages/schedule/scheduleList'
import TicketOrder from './pages/me/ticketOrder'
import TicketDetail from './pages/me/ticketDetail'

import './business/storage'
import './style/index'

const App = StackNavigator(
    {
        Welcome: { screen: Welcome },
        MainPage: { screen: MainPage },
        QrCodeScan: { screen: QrCodeScan },
        VideoView: { screen: VideoView },
        GoodsDetail: { screen: GoodsDetail },
        Login: { screen: Login },
        ForgetPw: { screen: ForgetPw },
        Register: { screen: Register },
        Cinema: { screen: Cinema }, 
        ChooseSeat:{screen:ChooseSeat},
        ScheduleList: { screen: ScheduleList },
        TicketOrder: { screen: TicketOrder },
        TicketDetail: { screen: TicketDetail }
    },
    {
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
        }
    });
export default App 