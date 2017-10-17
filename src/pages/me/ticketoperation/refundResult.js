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
import theme from '../../../style/index';


class RefundRuleView extends Component {
  render() {
    return (
      <View >
        <Header title={'详情'}  ></Header>
        <View style={[styles.view, {paddingBottom:30, marginBottom: 10,alignItems: 'center' }]}>
        <Image source={require('../../../assets/me/success.png')} style={styles.imgSty} resizeMode='stretch'>
        </Image>
        <Text>订单退订成功！</Text>
      </View>
        <View style={styles.view}>
          <View style={[styles.betweenView,theme.mb10,{ paddingVertical: theme.itemMargin, borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8' }]}>
          <Text style={[theme.fontBlack]}>退款明细</Text>
          <Text style={[theme.fontBlack]}>订单总额 <Text style={theme.fontColorPrimary}>￥30</Text> 实付 <Text style={theme.fontColorPrimary}>￥15</Text> </Text>
          </View>
          <View style={styles.betweenView}>
            <Text>影片名称</Text><Text>神奇女侠</Text> 
          </View>
          <View style={styles.betweenView}>
            <Text>订单号</Text><Text>68598239856</Text> 
          </View>
          <View style={styles.betweenView}>
            <Text>积分退回</Text><Text>300</Text> 
          </View>
          <View style={styles.betweenView}>
            <Text>券退回</Text><Text>5元立减券1张</Text> 
          </View>
          <View style={styles.betweenView}>
            <Text>积分退回</Text><Text>300</Text> 
          </View>
          <View style={styles.betweenView}>
            <Text>券退回</Text><Text>5元立减券1张</Text> 
          </View>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  betweenView:{flexDirection: 'row',justifyContent: 'space-between'},
  imgSty:{width:60,height:60,marginTop:30,marginBottom:10},
  view:{paddingHorizontal: theme.pagePadding,justifyContent:'center',paddingVertical: theme.itemMargin,backgroundColor:'#ffffff',marginBottom:10},
  center:{}
})

module.exports = RefundRuleView;