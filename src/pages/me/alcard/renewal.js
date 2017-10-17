import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Header from '../../common/header';
import theme from '../../../style/index';
import {Button,CheckBox} from '../../common/component';
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
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#ffffff'}}>
        <Header  ></Header>
        <View style={{flex:1}}>
          <View style={styles.top}>
            <View style={styles.avatarbox}>
              <Image style={[styles.avatarImg]} source={require('../../../assets/me/default_portrait.png')}></Image>
            </View>
            <Text style={[theme.fontWhite, theme.font16, theme.mt10]}>180****1317</Text>
          </View>
          <View style={styles.view}>
              <Image source={require('../../../assets/me/renewal-empty.png')} style={{width:'60%'}} resizeMode='contain' ></Image>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#ffffff',
    paddingHorizontal: theme.itemMargin, alignItems: 'center',
    justifyContent: 'center',
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
  }
})

module.exports = SignScreen;