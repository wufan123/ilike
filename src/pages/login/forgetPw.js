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
        <Header title={'找回密码'} bgColor={{ backgroundColor: '#ffffff' }} textColor={{ color: globalStyle.colorPrimary }} theme={'white'} ></Header>
        <View style={[styles.login]}>
          <View style={{width:'100%'}}>
            <View style={{marginLeft:globalStyle.pagePadding,marginRight:globalStyle.pagePadding}}>
              <View style={{ position: 'relative' }}>
                  <Image source={require('../../assets/login/phone.png')} style={{ height: 15, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                  <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='请输入手机号' style={[styles.inputStyle]} >
                  </TextInput>
              </View>
              <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image source={require('../../assets/login/link.png')} style={{ height: 15, marginRight: 5, top: 12, position: 'absolute' }} resizeMode='contain' />
                  <TextInput underlineColorAndroid="transparent" placeholder='请输入验证码' style={[styles.inputStyle, { flex:1 }]}  >
                  </TextInput>
                  <Button text={'获取验证码'} buttonStyle={{ backgroundColor: globalStyle.colorPrimary, width: 100, marginLeft:15 }}></Button>
              </View>
              <View style={{ position: 'relative' }}>
                  <Image source={require('../../assets/login/unlock.png')} style={{ height: 15, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                  <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='设置新密码(6-20位数字或字符)' style={[styles.inputStyle]} >
                  </TextInput>
              </View>
              <View style={{ position: 'relative' }}>
                  <Image source={require('../../assets/login/lock.png')} style={{ height: 15, marginRight: 10, top: 12, position: 'absolute' }} resizeMode='contain' />
                  <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='确认新密码(6-20位数字或字符)' style={[styles.inputStyle]} >
                  </TextInput>
              </View>
              <Button buttonStyle={{ height: 40, backgroundColor: globalStyle.colorPrimary }} text={'重置密码'} />
            </View>
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
    paddingTop:globalStyle.itemMargin ,
    backgroundColor:'#ffffff'
  },
  inputStyle:{
    height: 40, 
    borderColor: globalStyle.colorPrimary, 
    borderWidth: 0.5,
    marginBottom:globalStyle.itemMargin,
    paddingLeft:35
}
})

module.exports = ForgetPwScreen;