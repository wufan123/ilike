import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Header from '../common/header';
import theme from '../../style/index';
import {Button,CheckBox} from '../common/component';
class SignScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressState: false,
      test:'9999999'
    }
  }

  setExchangePoints(result){
    this.setState({pressState: !result });
  }

  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <Header  ></Header>
        <View style={{flex:1}}>
          <View style={styles.top}>
            <View style={styles.avatarbox}>
              <Image style={[styles.avatarImg]} source={require('../../assets/me/default_portrait.png')}></Image>
            </View>
            <Text style={[theme.fontWhite, theme.font16, theme.mt10]}>180****1317</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.title}>升级至al_Vip2</Text>
              <View style={{flexDirection:'row',paddingVertical: theme.itemMargin,justifyContent:'space-between'}}>
              <Text>使用兑换300积分方式进行升级</Text>
                <CheckBox oncheckChange={(pressState)=> this.setExchangePoints(pressState)}></CheckBox>
              </View>
          </View>
        </View>
        <Button style={styles.button} text={this.state.pressState?'去支付（需要积分:300分）':'确认升级'}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#ffffff',
    paddingHorizontal: theme.itemMargin, 
  },
  top: {
    backgroundColor: theme.colorPrimary,
    height: 110,
    width: '100%',
    alignItems: 'center',
  },
  avatarbox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.borderColor,
    borderRadius: 40,
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  title:{
    color:'#fc9d40',borderBottomWidth:0.5,borderBottomColor:'#e8e8e8',paddingVertical: theme.itemMargin
  }
})

module.exports = SignScreen;