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
        source={require('../../../resources/tabs/icon_goods_s.png')}
        style={[styles.tab_icon]}
      />
    );
  }
  else {
    return (
      <Image
        source={require('../../../resources/tabs/icon_goods_n.png')}
        style={[styles.tab_icon]}
      />
    );
  }
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
