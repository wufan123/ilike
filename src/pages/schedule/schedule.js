import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

function tabBarIcons(focused) {
  if (focused) {
    return (
      <Image
        source={require('../../assets/tabs/icon_schedule_s.png')}
        style={[styles.tab_icon]}
      />
    );
  }
  else {
    return (
      <Image
        source={require('../../assets/tabs/icon_schedule_n.png')}
        style={[styles.tab_icon]}
      />
    );
  }
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
