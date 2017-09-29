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
import globalStyle from '../../style/index';

class ForgetPwScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header title={'注册会员'} bgColor={{ backgroundColor: '#ffffff' }} textColor={{ color: globalStyle.colorPrimary }} theme={'white'} ></Header>
        <View style={styles.login}>
          <View>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../assets/login/phone.png')} style={{ height: 20, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='请输入手机号' style={[styles.inputStyle]} >
                </TextInput>
            </View>
            <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={require('../../assets/login/link.png')} style={{ height: 20, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" placeholder='请输入验证码' style={[styles.inputStyle, { width: 250 }]}  >
                </TextInput>
                <Button text={'获取验证码'} buttonStyle={{ backgroundColor: globalStyle.colorPrimary, width: 100, marginLeft:15 }}></Button>
            </View>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../assets/login/unlock.png')} style={{ height: 20, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='设置新密码(6-20位数字或字符)' style={[styles.inputStyle]} >
                </TextInput>
            </View>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../assets/login/lock.png')} style={{ height: 20, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='确认新密码(6-20位数字或字符)' style={[styles.inputStyle]} >
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row',marginBottom:40}}>
              <Image source={require('../../assets/login/agree.png')} style={{ height: 20 }} resizeMode='contain' />
              <Text>我已同意并接受《影城相关服务协议》</Text>
            </View>
            <Button buttonStyle={{ height: 43, backgroundColor: globalStyle.colorPrimary }} text={'立即注册'} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login :{
    flex: 1, 
    flexDirection: 'column' , 
    alignItems:'center' ,
    paddingTop:20 ,
    backgroundColor:'#ffffff'
  },
  inputStyle:{
    height: 43, 
    borderColor: globalStyle.colorPrimary, 
    borderWidth: 1,
    marginBottom:20,
    paddingLeft:35
}
})

module.exports = ForgetPwScreen;