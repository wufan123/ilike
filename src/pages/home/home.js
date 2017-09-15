import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SeatSelectView from '../common/SeatSelectView'
import * as WeChat from 'react-native-wechat';
import Header from '../common/header'
const { width, height } = Dimensions.get('window')

function tabBarIcons(focused) {
  let icon = focused ? require('../../assets/tabs/icon_home_s.png') : require('../../assets/tabs/icon_home_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => tabBarIcons(focused)
  }
  constructor(props) {
    super(props)
    this.state = {
      title: '首页',
      tab: ['热映', '待映']
    }
  }
  changeSelect(selectItem) {
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <Header tab={this.state.tab} changeSelect={this.changeSelect}></Header>
        <Button
          onPress={() => {
              WeChat.shareToTimeline({
                  type: 'imageUrl',
                  title: 'web image',
                  description: 'share web image to time line',
                  mediaTagName: 'email signature',
                  messageAction: undefined,
                  messageExt: undefined,
                  imageUrl: 'http://www.ncloud.hk/email-signature-262x100.png'
              })
          }}
          title="Chat with Lucy"
        />
      </View>
    )
  };

}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26,
  },
  homeContainer: {
    flex: 1,
  }
});



module.exports = HomeScreen;
