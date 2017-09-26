import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Header from '../common/header'
import Tab from '../common/tab'
var theme = require('../../style')
function tabBarIcons(focused) {
  let icon = focused ? require('../../assets/tabs/icon_schedule_s.png') : require('../../assets/tabs/icon_schedule_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class ScheduleScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '排期',
    tabBarIcon: ({ focused }) => tabBarIcons(focused)
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '排期',
      plan: ['星期一', '星期三', '星期二', '星期四', '星期五', '星期六', '星期日'],
      list: [
        { data: [1, 2, 3, 4, 5], title: 'section 0' },
        { data: [1, 2, 3], title: 'section 1' },
        { data: [1, 2, 3, 4], title: 'section 2' },
        { data: [1, 2,], title: 'section 3' },
      ],
    }
  }

  getList() {

  }

  render() {
    return (
      <View style={theme.flex}>
        <Header showCinema={true} title={this.state.title} disableBack={true}></Header>
        <Tab tab={this.state.plan} />
        {this.getList()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26,
  },
});

module.exports = ScheduleScreen;
