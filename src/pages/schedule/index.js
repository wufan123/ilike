import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Header from '../common/header'

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
      title: '排期'
    }
  }

  render() {
    return (
      <View>
        <Header title={this.state.title} disableBack={true}></Header>
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
