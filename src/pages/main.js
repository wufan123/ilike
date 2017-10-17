import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from './home/home'
import ScheduleScreen from './schedule'
import StoreScreen from './store'
import MeScreen from './me'

const TabNav = TabNavigator({
    HomeTab: {
        screen: HomeScreen,
    },
    ScheduleTab: {
        screen: ScheduleScreen,
    },
    GoodsTab: {
        screen: StoreScreen
    },
    MeTab: {
        screen: MeScreen
    }
}, {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#dc3c38',
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true,
            indicatorStyle: {
                height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#ffffff', // TabBar 背景色
                // height: 50,
            },
            labelStyle: {
                fontSize: 10, // 文字大小
                paddingTop: 3,
                paddingBottom: 3,
                margin: 0,
            },
            tabStyle: {
                marginTop: 5,
                height: 45,
            },
        },
    });

class TabScreen extends Component {
    render() {
        return (
            <TabNav ref={nav => { if (nav) global.tabNavigator = nav; }} />
        );
    }
}


module.exports = TabScreen;
