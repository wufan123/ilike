import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Button } from '../common/component'
import Header from '../common/header';
import theme from '../../style/index';


class ScorerecScreen extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Header title={'积分记录'}></Header>
        <View style={[styles.view,{paddingVertical:20,paddingBottom:30,marginBottom:10}]}>
            <Text>账户总积分</Text>
            <Text style={[theme.fontColorPrimary,{fontSize:40}]}>26</Text>
            <Image source={require('../../assets/me/score-shadow.png')} style={{width:200,height:30}}  resizeMode='contain'></Image>
        </View>
        <View style={[styles.view,styles.row]}>
          <View>
            <Text>签到领取5.00积分</Text>
            <Text style={{color:'#989ba6',fontSize:12}}>获取时间: 2017-10-10</Text>
          </View>
          <Text style={{color:'#32b16c',fontSize:25}}>+3</Text>
        </View>
        <View style={[styles.view,styles.row]}>
          <View>
            <Text>签到领取5.00积分</Text>
            <Text style={{color:'#989ba6',fontSize:12}}>获取时间: 2017-10-10</Text>
          </View>
          <Text style={{color:'#32b16c',fontSize:25}}>+5</Text>
        </View>
        <View style={[styles.view,styles.row]}>
          <View>
            <Text>签到领取5.00积分</Text>
            <Text style={{color:'#989ba6',fontSize:12}}>获取时间: 2017-10-10</Text>
          </View>
          <Text style={{color:'#32b16c',fontSize:25}}>+15</Text>
        </View>
        <View style={[styles.view,styles.row]}>
          <View>
            <Text>签到领取5.00积分</Text>
            <Text style={{color:'#989ba6',fontSize:12}}>获取时间: 2017-10-10</Text>
          </View>
          <Text style={{color:'#32b16c',fontSize:25}}>+5</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor: '#ffffff',
    justifyContent:'center',
    paddingVertical: theme.itemMargin,
    alignItems:'center'
  },
  row:{
    paddingHorizontal:10,flexDirection: 'row',justifyContent:'space-between',borderBottomWidth:0.5,borderBottomColor:'#e8e8e8'
  }
})

module.exports = ScorerecScreen;