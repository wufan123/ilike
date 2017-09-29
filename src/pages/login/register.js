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
        <View style={{width:'100%'}}>
            <View style={{marginLeft:globalStyle.pagePadding,marginRight:globalStyle.pagePadding}}>
                <View style={styles.inputView}>
                <Image source={require('../../assets/login/phone.png')} style={styles.inputIcon} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='请输入手机号' style={styles.inputStyle} >
                </TextInput>
            </View>
            <View style={{flexDirection:'row'}}>
            <View  style={[{justifyContent: 'space-between',flex:1,marginRight:10 },styles.inputView]}>
              <Image source={require('../../assets/login/link.png')} style={styles.inputIcon} resizeMode='contain' />
              <TextInput underlineColorAndroid="transparent" placeholder='请输入验证码' style={styles.inputStyle}  >
              </TextInput>
            </View>
            <Button text={'获取验证码'} buttonStyle={{ backgroundColor: globalStyle.colorPrimary, width: 100 }}></Button>
          </View>
            <View style={styles.inputView}>
                <Image source={require('../../assets/login/unlock.png')} style={styles.inputIcon} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='设置新密码(6-20位数字或字符)' style={styles.inputStyle} >
                </TextInput>
            </View>
            <View  style={styles.inputView}>
                <Image source={require('../../assets/login/lock.png')} style={styles.inputIcon} resizeMode='contain' />
                <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='确认新密码(6-20位数字或字符)' style={styles.inputStyle} >
                </TextInput>
            </View>
              <View style={{ flexDirection: 'row',marginBottom:40}}>
                <Image source={require('../../assets/login/agree.png')} style={{ height: 15 }} resizeMode='contain' />
                <Text>我已同意并接受《影城相关服务协议》</Text>
              </View>
              <Button buttonStyle={{ height: 40, backgroundColor: globalStyle.colorPrimary }} text={'立即注册'} />
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
  inputView: {
    position: 'relative',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: globalStyle.itemMargin
  },
  inputIcon: {
    height: 15,
    marginRight: 10,
    top: 12,
    position: 'absolute'
  },
  inputStyle: {
    flex: 1,
    height: 38,
    paddingLeft: 35
  }
})

module.exports = ForgetPwScreen;