import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

function tabBarIcons(focused) {
  let icon = focused ?require('../../assets/tabs/icon_schedule_s.png') :require( '../../assets/tabs/icon_schedule_n.png')
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
    tabBarIcon: ({focused}) => tabBarIcons(focused)
  }

  render() {
    return (
      <View>
        <Text>
          schedule
        </Text>
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
