import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

function tabBarIcons(focused) {
  let icon = focused ?require('../../assets/tabs/icon_goods_s.png') :require( '../../assets/tabs/icon_goods_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class GoodsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '卖品',
    tabBarIcon: ({focused}) => tabBarIcons(focused)
  } 

  render() {
    return (
      <View>
        <Text>
          goods
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

module.exports = GoodsScreen;
