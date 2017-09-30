import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Header from '../common/header';
var theme = require('../../style')

class TicketDetailScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      priceDetailToggle:false
    }
  }

  _priceDetail(){
    return (
      <View style={this.state.priceDetailToggle? {display:'flex'} : {display:'none'} }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
              <Text>兑换券支付</Text>
              <Text>已兑换2张影票</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
              <Text>兑换券支付</Text>
              <Text>已兑换2张影票</Text>
        </View>
      </View>
      
    )
  }

  _priceToggleFn(){
    this.setState(previousState => {
      return { priceDetailToggle: !previousState.priceDetailToggle };
    });
  }

  render() {
    return (
      <View style={[styles.homeContainer, theme.flex]}>
        <Header title={'影票详情'}></Header>
        <ScrollView>
          <View style={styles.view}>
            <View style={styles.viewBody}>
              <Text style={styles.textStyle}>战狼2(数字3D)              <Text style={{ color: theme.orangeColor }}>￥84.00</Text></Text>
              <Text style={styles.textStyle}>2017-08-19 19:00(ZMAX3D)</Text>
              <Text style={styles.textStyle}>中瑞南华影城(三坊七巷店)   ZMAX巨幕厅</Text>
              <Text style={styles.textStyle}>8排14座  8排15座</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
              <Text>订单时间：2017-08-19 13:42</Text>
              <Text>状态：支付完成</Text>
            </View>
          </View>
          <View style={styles.view}>
            <TouchableOpacity onPress={()=> this._priceToggleFn()} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: -10 }}>
              <Text style={styles.textStyle}>总额 <Text style={{ color: theme.colorPrimary }}>￥84.00</Text>    实付 <Text style={{ color: theme.colorPrimary }}>￥0.00</Text></Text>
              <Text style={styles.textStyle}>详情 <Image source={this.state.priceDetailToggle?require('../../assets/me/top-btn.png'):require('../../assets/me/bottom-btn.png')} style={{ width: 15,position:'absolute',top:10 }} resizeMode='contain' /></Text>
            </TouchableOpacity>
            {this._priceDetail()}
          </View>
          <View style={styles.view}>
              <View style={{ flexDirection: 'row', marginBottom: -10,borderBottomColor: theme.borderColor,borderBottomWidth: 1 }}>
                <Image source={require('../../assets/me/getTicket.png')}  style={{position:'relative', width: 13,marginRight:5, top:-5}} resizeMode='contain'/>
                <Text style={styles.textStyle}>凭如下信息至影城自助取票机取票</Text>
              </View>
              <View style={{ flexDirection: 'column',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={[styles.textStyle,{color:theme.colorPrimary}]}>订单号:20170819134236898782230170</Text>
                <Text style={[styles.textStyle,{color:theme.colorPrimary}]}>取票码:WHKK8CP</Text>
                <Image source={require('../../assets/ewm.png')}  style={{position:'relative', width: 100}} resizeMode='contain'/>
              </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: theme.pagePadding,
    paddingVertical: theme.itemMargin,
    borderBottomColor: theme.borderColor,
    borderBottomWidth: 1
  },
  viewBody: {
    paddingVertical: theme.itemMargin,
    borderBottomColor: theme.borderColor,
    borderBottomWidth: 1
  },
  textStyle: {
    color: '#3f3f3f',
    position:'relative',
    marginBottom: theme.itemMargin
  }
})

module.exports = TicketDetailScreen;