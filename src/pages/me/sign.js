import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Button } from '../common/component'
import Header from '../common/header';
import { RefreshScrollView } from '../common/pull'
import theme from '../../style/index';


class SignScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header title={'会员签到'} rightTxt={'领奖记录'} rightClick={this.rightClick}></Header>
        <Image source={require('../../assets/me/qdBg.jpg')} style={{ width: '100%', height: '100%', zIndex: 0 }} resizeMode='stretch'  >
          <View style={styles.yellowBox}>
            <Text><Image source={require('../../assets/me/tipIcon.png')}></Image> 每日须连续签到，才能领取次日签到奖品哦!</Text>
          </View>
          <ScrollView>
            <View style={{ paddingHorizontal: theme.pagePadding, marginTop:15, flexDirection: 'column',height:500,overflow:'hidden'}}>
              <Image source={require('../../assets/me/qd-title.png')} style={{ width: '100%', zIndex: 10 }} resizeMode='contain'></Image>
              <Image source={require('../../assets/me/qdcon.png')} style={{ width: '100%', top: -300 }} resizeMode='contain' >
                <Text style={{zIndex:200}}>0000000000000000000000</Text>
              </Image>
            </View>
          </ScrollView>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    position: 'relative',
  },
  yellowBox: {
    height: 30,
    backgroundColor: '#fff9c4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

module.exports = SignScreen;