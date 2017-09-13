import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  View,
  Text
} from 'react-native';
import HomeScreen from './home/home'
import ScheduleScreen from './schedule/schedule'

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Schedules: {
    screen: ScheduleScreen
  }
});

const ScheduleStack = StackNavigator({
  Schedule: {screen: ScheduleScreen}
})

const Zmfilm = TabNavigator({
    Home: {
        screen: HomeStack,
      },
    Schedule: {
      screen: ScheduleStack,
    },
  }, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
});

module.exports = Zmfilm;
