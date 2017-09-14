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
        source={require('../../../resources/tabs/icon_me_s.png')}
        style={[styles.tab_icon]}
      />
    );
  }
  else {
    return (
      <Image
        source={require('../../../resources/tabs/icon_me_n.png')}
        style={[styles.tab_icon]}
      />
    );
  }
}

class MeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({focused}) => tabBarIcons(focused)
  }

  render() {
    return (
      <View>
        <Text>
          me
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

module.exports = MeScreen;
