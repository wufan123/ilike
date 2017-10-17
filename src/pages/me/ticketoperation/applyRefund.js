import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import Header from '../../common/header';
import { Button } from '../../common/component'
import theme from '../../../style/index';


class ReplayModifyView extends Component {
  render() {
    return (
      <View style={styles.pageSty} >
        <Header title={'申请退款'}  ></Header>
        <ScrollView>
          <View style={[styles.view, { marginBottom: 10 }]}>
            <Text style={[theme.fontBlack, theme.mb10, { paddingVertical: theme.itemMargin, borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8' }]}>本月剩余退票次数</Text>
            <View style={styles.center}>
              <ImageBackground source={require('../../../assets/me/refund-explain01.png')} style={styles.circle} resizeMode='stretch'>
                <Text style={[theme.fontWhite, theme.font16]}><Text style={theme.font24}>3</Text> 次</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.view}>
            <Text style={[theme.fontBlack, theme.mb10, { paddingVertical: theme.itemMargin, borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8' }]}>退票规则</Text>
            <Text style={theme.mb10}>1.影片开映前2小时且未取票的可申请退票</Text>
            <Text style={theme.mb10}>V1用户每月累计退票次数限制1次</Text>
            <Text style={theme.mb10}>V2用户每月累计退票次数限制3次</Text>
            <Text style={theme.mb10}>V3用户每月累计退票次数限制1次</Text>
            <Text style={theme.mb10}>V4用户每月累计退票次数限制3次</Text>
          </View>
          <Button onPress={()=>{global.navigation.navigate('RefundPay')}} text={'确认退票'} buttonStyle={{ backgroundColor: theme.colorPrimary, marginHorizontal: 10, marginVertical: 10 }}></Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageSty: { flex: 1 },
  center: { flexDirection: 'row', justifyContent: 'center' },
  view: { paddingVertical: theme.itemMargin, backgroundColor: '#ffffff', paddingHorizontal: theme.pagePadding },
  circle:{width: 120, height: 120,justifyContent: 'center',alignItems: 'center',marginVertical:20}
})

module.exports = ReplayModifyView;