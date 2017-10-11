import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Header from '../common/header';
import theme from '../../style/index';

class AlcardInfoDtView extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header  ></Header>
        <View style={styles.account}>
          <Image source={require('../../assets/me/user-level.png')} style={{ height: 50 }} resizeMode='contain'></Image>
          <Text style={{ color: '#ffa303' }}>al_Vip1</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>特权介绍</Text>
          <Text style={styles.detail}>每次购票可享受1倍积分,购卖品可享受1倍积分;</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>享用人群</Text>
          <Text style={styles.detail}>al_Vip1</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>规则说明</Text>
          <Text style={styles.detail}>1、会员积分可参与线下积分活动兑换指定礼品；2、会员积分可根据100：1的比例在消费时抵现；3、会员积分仅限在最美电影APP或中瑞电影APP上消费时抵扣，不可提现；</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    paddingHorizontal: theme.itemMargin,
    marginBottom: 10
  },
  title: {
    borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8', paddingVertical: theme.itemMargin,color:'#3f3f3f'
  },
  detail: { paddingVertical: theme.itemMargin },
  account: {
    backgroundColor: '#fff2c9',
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

})

module.exports = AlcardInfoDtView;