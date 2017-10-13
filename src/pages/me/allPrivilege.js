import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Header from '../common/header';
import { Tab } from '../common/component'
import theme from '../../style/index';

class AllPrivilegeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['al_Vip1', 'al_Vip2', 'al_Vip3', 'al_Vip4'],
    }
  }
  render() {
    return (
      <View >
        <Header title={'全部特权'}  ></Header>
        <Tab tab={this.state.tabs} changeSelect={(a, b) => { console.log('tab的index', a, b) }} />
        <View style={styles.cardBody}>
          <Image source={require('../../assets/me/sign06.png')} style={{ height: 30 }} resizeMode='contain' ></Image>
          <View style={{ flex: 1 }}>
            <Text>消费积分</Text>
            <Text>每次购票可享受1倍积分,购卖品可享受1倍积分;</Text>
          </View>
          <Image style={styles.rightImg} source={require('../../assets/common/right_btn.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: '#ffffff', borderTopWidth: 0.5, borderTopColor: '#e8e8e8',
    paddingHorizontal: theme.itemMargin,
    flexDirection: 'row', paddingVertical: theme.itemMargin, justifyContent: 'center', alignItems: 'center'
  },
  rightImg: {
    width: 9,
    height: 17,
  }

})

module.exports = AllPrivilegeView;