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

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent"
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable={true}
        maxLength={40}
      />
    );
  }
}


class HelpbackScreen extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Header title={'意见反馈'} rightTxt={'记录'} rightClick={this.rightClick}></Header>
        <View style={styles.view}>
          <UselessTextInput  keyboardType='default'  style={{ textAlignVertical: 'top' }} placeholder='恶心自己成全别人，来吐槽吧~' multiline={true} numberOfLines={8} ></UselessTextInput>
          <Image source={require('../../assets/me/ff.png')} style={{width:60,height:60}} resizeMode='contain' ></Image>
        </View>
        <View style={[styles.view,{paddingVertical:0}]}>
         <TextInput underlineColorAndroid="transparent" placeholder='请留下您的手机号或者QQ号，以便答复'></TextInput>
        </View>
        <Button buttonStyle={styles.button} text={'提交'} />
        <Text style={[theme.fontColorPrimary,{textAlign:'center'}]}>
        <Image source={require('../../assets/me/phone02.png')} style={{width:30,height:30}} resizeMode='contain'  />  4000-125-000</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    marginBottom: theme.itemMargin,
    paddingHorizontal: theme.pagePadding,
    paddingVertical: theme.itemMargin,
  },
  button: {
    margin: theme.pagePadding,
    marginRight: theme.pagePadding,
    backgroundColor: theme.colorPrimary,
    borderRadius: theme.borderRadius,
  }
})

module.exports = HelpbackScreen;