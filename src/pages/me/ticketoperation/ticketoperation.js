import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import Header from '../../common/header';
import { Button } from '../../common/component'
import theme from '../../../style/index';
import ScrollViewPage from '../../common/basePullPage'

class AllPrivilegeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recordList: [{ priceDetailToggle: false }, { priceDetailToggle: false }, { priceDetailToggle: false }, { priceDetailToggle: false }],
    }
  }

  _onPullReleaseFn() {

  }


  _priceDetail(item) {
    if (item.priceDetailToggle)
      return (
        <View>
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

  _priceToggleFn(index) {
    this.setState(previousState => {
      let newList = previousState.recordList.slice();
      newList[index].priceDetailToggle = !newList[index].priceDetailToggle
      return { recordList: newList };
    });
  }

  getPayInfo({ item, index }) {
    return (<View style={styles.view}>
      <TouchableOpacity onPress={() => this._priceToggleFn(index)}
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.textStyle}>总额 <Text style={{ color: theme.colorPrimary }}>￥84.00</Text> 实付 <Text
          style={{ color: theme.colorPrimary }}>￥0.00</Text></Text>
        <Text style={styles.textStyle}>详情 <Image
          source={item.priceDetailToggle ? require('../../../assets/me/top-btn.png') : require('../../../assets/me/bottom-btn.png')}
          style={{ width: 15, position: 'absolute', top: 10 }} resizeMode='contain' /></Text>
      </TouchableOpacity>
      {this._priceDetail(item)}
    </View>)
  }

  _renderRecord = ({ item, index }) => {
    console.log(item, index)
    return (
      <View style={styles.card}>
        <View style={styles.filmDetail}>
          <Image resizeMode="stretch" style={styles.movieThumb} source={{ uri: 'http://img5.mtime.cn/pi/2017/03/23/233340.20916876_1000X1000.jpg' }} />
          <View style={styles.filmText}>
            <Text>英伦对决（数字3D）</Text>
            <Text>片长：90min </Text>
          </View>
        </View>
        <View style={styles.filmXX}>
          <Text style={styles.textLine}>明天01-06  15:40</Text>
          <Text style={styles.textLine}>中瑞红星店  5号厅</Text>
          <Text style={styles.textLine}>15排21座  15排22座  15排21座  15排22座</Text>
        </View>
        {this.getPayInfo({ item, index })}
        <View style={[styles.filmDetail,{justifyContent:'space-between',paddingTop:15}]}>
          <Button onPress={()=>{global.navigation.navigate('ApplyRefund')}} buttonStyle={[styles.bottonSty,{marginRight:10}]} text={'申请退票'} textStyle={{color:'#159eec'}}></Button>
          <Button onPress={()=>{global.navigation.navigate('ApplyModify')}} buttonStyle={styles.bottonSty} text={'不可改签'} textStyle={{color:'#159eec'}}></Button>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollViewPage title={'退票中心'} onPullRelease={() => { this._onPullReleaseFn() }} >
        <View>
        <TouchableOpacity onPress={()=>{ global.navigation.navigate('RefundRule') }} style={[styles.card,styles.filmDetail,{justifyContent:'space-between'}]}>
          <Text>订单不可退票或改签？</Text> 
          <Text style={theme.fontColorPrimary}>查看退改签规则></Text>
          </TouchableOpacity>
        <FlatList data={this.state.recordList} renderItem={this._renderRecord} ></FlatList>
        </View>
      </ScrollViewPage>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    paddingHorizontal: theme.pagePadding,
    paddingVertical: theme.itemMargin,
    backgroundColor: '#ffffff'
  },
  filmDetail: { flexDirection: 'row' },
  movieThumb: { width: 45, height: 60 },
  filmText: { flexDirection: 'column', justifyContent: 'space-between', marginLeft: 10 },
  filmXX: { borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8', paddingVertical: theme.itemMargin, },
  textLine: { paddingTop: 5, paddingBottom: 5 },
  view: { paddingVertical: theme.itemMargin,borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8' },
  bottonSty:{height:30,flex:1,borderColor:'#159eec',borderWidth:0.5,backgroundColor:'#ffffff'}
})

module.exports = AllPrivilegeView;