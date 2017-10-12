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
import ConfirmOrder from './pages/order/comfirmOrder'
import TicketOrder from './pages/me/ticketOrder'
import TicketDetail from './pages/me/ticketDetail'
import Appraise from './pages/me/appraise'
import FoodOrder from './pages/me/foodOrder'
import Sign from './pages/me/sign'
import Helpback from './pages/me/helpback'
import Scorerec from './pages/me/scorerec'
import Consumerec from './pages/me/consumerec'
import Alcard from './pages/me/alcard'
import Upgrade from './pages/me/upgrade'
import AlcardInfoDt from './pages/me/alcardInfoDt'
import AllPrivilege from './pages/me/allPrivilege'
import Renewal from './pages/me/renewal'
import MovieDetail from './pages/movieDetail/movieDetail'
import WriteComment from './pages/movieDetail/writeComment'
import CommentReplyList from './pages/movieDetail/commentReplyList'
import ImageViewer from './pages/common/imageViewer'
import UseCoupon from './pages/coupon/useCoupon'
import Setting from './pages/me/setting'
import PayResult from './pages/order/payResult'
import Pay from './pages/order/pay'
import './business/storage'
import './style/index'
import Coupon from "./pages/coupon/coupon";
import UnWatchMovieTicketScreen from "./pages/me/unwatchMovieTicket"

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
        TicketDetail: { screen: TicketDetail },
        Appraise:{ screen: Appraise },
        FoodOrder:{ screen: FoodOrder },
        Sign:{ screen: Sign },
        Helpback:{ screen: Helpback },
        Scorerec:{ screen: Scorerec },
        Consumerec:{ screen: Consumerec},
        Alcard:{ screen: Alcard },
        Upgrade:{ screen: Upgrade },
        AlcardInfoDt:{ screen: AlcardInfoDt },
        AllPrivilege:{ screen: AllPrivilege },
        Renewal:{ screen: Renewal },
        MovieDetail: {screen: MovieDetail},
        ConfirmOrder: { screen: ConfirmOrder },
        WriteComment: { screen: WriteComment },
        CommentReplyList: { screen: CommentReplyList},
        ImageViewer: {screen: ImageViewer},
        UseCoupon: { screen: UseCoupon},
        Setting: {screen: Setting},
        PayResult: {screen: PayResult},
        Pay: {screen: Pay},
        Coupon: { screen: Coupon},
        UnWatchMovieTicket: {screen: UnWatchMovieTicketScreen}
    },
    {
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
        }
    });
export default App 