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

class ItemComponet extends Component {
  static defaultProps = {
    onPress: null,
    source: null,
    title: '',
    subTitle: '',
    marginTop: false,
    borderBottom: false,
  };

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress} style={[this.props.marginTop ? theme.mt10 : null, this.props.borderBottom ? theme.bottomBorder : null]}>
        <View style={[styles.item, theme.whiteBlockWithPadding, theme.row]}>
          <Image style={styles.itemImg} source={this.props.source} />
          <Text style={[theme.fontBlack, theme.font16]}>{this.props.title}</Text>
          <Text style={[theme.fontGray, theme.font14, theme.flex, { textAlign: 'right' }]}>{this.props.subTitle}  </Text>
          <Image style={styles.rightImg} source={require('../../../assets/common/right_btn.png')} />
        </View>
      </TouchableOpacity>
    )
  }

}

class SignScreen extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Header title={'我的账户'} ></Header>
        <View style={styles.account}>
          <Image source={require('../../../assets/me/user-level.png')} style={{ height: 50 }} resizeMode='contain'></Image>
          <Text style={{ color: '#ffa303' }}>al_Vip1</Text>
        </View>
        <ItemComponet onPress={() => {global.navigation.navigate('Upgrade');}}  title={'账户升级'} borderBottom={true}/>
        <ItemComponet title={'账户续期'} subTitle={'帐户有效期：永久'} onPress={() => {global.navigation.navigate('Renewal');}} />
        <TouchableOpacity style={styles.card}  onPress={() => {global.navigation.navigate('AlcardInfoDt');}}      >
          <Text style={[theme.fontBlack, theme.font16,styles.title]}>我的特权</Text>
          <View style={styles.cardBody}>
            <Image source={require('../../../assets/me/sign06.png')} style={{ height: 30 }} resizeMode='contain' ></Image>
            <View style={{flex:1}}>
              <Text>消费积分</Text>
              <Text>每次购票可享受1倍积分,购卖品可享受1倍积分;</Text>
            </View>
            <Image style={styles.rightImg} source={require('../../../assets/common/right_btn.png')} />
          </View>
        </TouchableOpacity>
        <ItemComponet title={'查看全部特权'}  onPress={() => {global.navigation.navigate('AllPrivilege');}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: '#fff2c9',
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardBody:{
    flexDirection: 'row',paddingVertical: theme.itemMargin,justifyContent: 'center',alignItems: 'center'
  },
  card: {
    paddingVertical: theme.itemMargin,
    paddingHorizontal: theme.itemMargin,
    backgroundColor: '#ffffff',
    marginVertical:theme.itemMargin,
    paddingTop:0
  },
  title:{paddingVertical: theme.itemMargin,
    borderBottomWidth:0.5,borderBottomColor:'#e8e8e8'
  },
  item: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImg: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  rightImg: {
    width: 9,
    height: 17,
  }
})

module.exports = SignScreen;