import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from './home/home'
import ScheduleScreen from './schedule/schedule'
import GoodsScreen from './goods/goods'
import MeScreen from './me/me'

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Schedule: {
    screen: ScheduleScreen
  },

});

const ScheduleStack = StackNavigator({
  Schedule: {screen: ScheduleScreen}
});

const GoodsStack = StackNavigator({
  Goods: {screen: GoodsScreen}
});

const MeStack = StackNavigator({
  Me: {screen: MeScreen}
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
    },
});

module.exports = Zmfilm;
