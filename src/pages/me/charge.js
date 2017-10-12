import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Header from '../common/header';
import { Button } from '../common/component'
import theme from '../../style/index';
import RightRadioGroup from "../common/rightRadio/rightRadioGroup";

class ChargeView extends Component {
  render() {
    return (
      <View >
        <Header title={'余额充值'}  ></Header>
          <View style={styles.calculation}>
            <Image source={require('../../assets/store/subtract-.png')} style={styles.calculationImg} resizeMode='stretch'></Image>
            <TextInput underlineColorAndroid="transparent" placeholder='请输入金额' style={styles.textSty}></TextInput>
            <Image source={require('../../assets/store/add_on.png')} style={styles.calculationImg} resizeMode='stretch'></Image>
          </View>

          <RightRadioGroup onSelect={(index) => { }} color={theme.colorPrimary} selectedIndex={0} style={{paddingVertical:10}} >
            <View style={{height:60}} >
              <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/ChannelToInterface/Cache/2017-08-08/150216474570.png' }} resizeMode='stretch' style={{ width: 40, height: 40 }}  ></Image>
              <View style={theme.ml10}>
                <Text>微信支付 </Text>
                <Text style={[theme.font10,theme.mt5,]}>微信客户端支付 </Text>
              </View>
            </View>
          </RightRadioGroup>
          <Text style={{textAlign:'center',marginTop:10}}>充值到180****1317账户余额</Text>
          <Button buttonStyle={styles.button} text={'立即充值'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  calculation: {marginHorizontal: 10,marginTop:20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: 50, padding: 5, alignItems: 'center' },
  calculationImg: { width: 35, height: 35 },
  textSty: { flex: 1, marginHorizontal: 10, height: 40, textAlignVertical: 'center' },
  choosePay: { flexDirection: 'row', justifyContent: 'space-between' },
  button:{marginHorizontal:10,marginTop:20}
})

module.exports = ChargeView;