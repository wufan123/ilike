import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from './home/home'
import ScheduleScreen from './schedule'
import StoreScreen from './store'
import MeScreen from './me'

const HomeStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Schedule: {
      screen: ScheduleScreen
    },
  },
  {
    navigationOptions: {
      header: null,
    }
  });

const ScheduleStack = StackNavigator(
  {
    Schedule: { screen: ScheduleScreen }
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);

const GoodsStack = StackNavigator(
  {
    Goods: { screen: StoreScreen }
  },
  {
    navigationOptions: {
      header: null,
    }
  });

const MeStack = StackNavigator(
  {
    Me: { screen: MeScreen }
  },
  {
    navigationOptions: {
      header: null,
    }
  })

const Zmfilm = TabNavigator({
  HomeStatck: {
    screen: HomeStack,
  },
  ScheduleStack: {
    screen: ScheduleStack,
  },
  GoodsStack: {
    screen: GoodsStack
  },
  MeStack: {
    screen: MeStack
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
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
        paddingBottom:3,
        margin: 0,
      }, 
      tabStyle: {
        marginTop: 5,
        height: 45,
      },
    },
  });

module.exports = Zmfilm;
