import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
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
        <Header title={'消费记录'}></Header>
        <ScrollView style={{flex:1}}>
        <Text style={styles.title}>英伦对决（数字3D）</Text>
        <View style={styles.view}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>订单号</Text>
            <Text style={styles.rowRight}>2017093017262433280</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>购票时间</Text>
            <Text style={styles.rowRight}>2017-09-30 17:29:44</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <Text style={[styles.rowLeft,{color:'#159eec'}]}>购买票数</Text>
            <Text style={styles.rowRight}>2张</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>订单金额</Text>
            <Text style={styles.rowRight}>¥60</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>使用优惠券</Text>
            <Text style={styles.rowRight}>券码:(HV2Q2KXJ2Y,2AYSCKDLTL)</Text>
          </View>
        </View>
        <Text style={styles.title}>英伦对决（数字3D）</Text>
        <View style={styles.view}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>订单号</Text>
            <Text style={styles.rowRight}>2017093017262433280</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>购票时间</Text>
            <Text style={styles.rowRight}>2017-09-30 17:29:44</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.rowLeft,{color:'#159eec'}]}>购买票数</Text>
            <Text style={styles.rowRight}>2张</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>订单金额</Text>
            <Text style={styles.rowRight}>¥60</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.rowLeft}>使用优惠券</Text>
            <Text style={styles.rowRight}>券码:(HV2Q2KXJ2Y,2AYSCKDLTL)</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{flexDirection:'column',flex:1},
  view: {
    backgroundColor: '#ffffff',paddingVertical: 0, paddingBottom: 0, marginBottom: 10,
    justifyContent: 'center',
    
  },
  title:{paddingHorizontal: theme.pagePadding, paddingVertical: 8, backgroundColor: '#e3e6ec'},
  row: {paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: '#f6f6f6'},
  rowLeft:{width:120,borderWidth:1,borderColor:'#f6f6f6',paddingVertical:8,textAlign:'center',borderBottomWidth:0},
  rowRight:{flex:1, textAlign:'center',borderWidth:1,paddingVertical:8,borderColor:'#f6f6f6',borderLeftWidth:0,borderBottomWidth:0}
})

module.exports = ScorerecScreen;