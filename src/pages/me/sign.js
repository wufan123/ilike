import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Button } from '../common/component'
import Header from '../common/header';
import { RefreshScrollView } from '../common/pull'
import theme from '../../style/index';


class SignScreen extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Header title={'会员签到'} rightTxt={'领奖记录'} rightClick={() => { global.navigation.navigate('Prizerec') }} ></Header>
        <ImageBackground source={require('../../assets/me/qdBg.jpg')} style={styles.bgImage} resizeMode='stretch'  >
          <View style={styles.yellowBox}>
            <Text><Image source={require('../../assets/me/tipIcon.png')}></Image> 每日须连续签到，才能领取次日签到奖品哦!</Text>
          </View>
          <ScrollView>
            <View style={styles.bodyContent}>
              <Image source={require('../../assets/me/qd-title.png')} style={styles.titleImage} resizeMode='stretch'></Image>
              <ImageBackground source={require('../../assets/me/qdcon.png')} style={styles.bodyImage} resizeMode='stretch' >
                <View style={styles.viewContent}>
                  <ImageBackground source={require('../../assets/me/qdcon_x.png')} style={[styles.box, { marginRight: 20 }]} resizeMode='stretch'>
                    <Text style={theme.fontWhite}>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text style={theme.fontColorPrimary}>积分3分</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../../assets/me/qdcon_x.png')} style={[styles.box, { marginRight: 20 }]} resizeMode='stretch'>
                    <Text style={theme.fontWhite}>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text style={theme.fontColorPrimary}>积分3分</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../../assets/me/qdcon_x.png')} style={[styles.box]} resizeMode='stretch'>
                    <Text style={theme.fontWhite}>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text style={theme.fontColorPrimary}>积分3分</Text>
                  </ImageBackground>
                </View>
                <View style={[styles.viewContent, { marginTop: 13 }]}>
                  <ImageBackground source={require('../../assets/me/qdcon_x.png')} style={[styles.box, { marginRight: 20 }]} resizeMode='stretch'>
                    <Text style={theme.fontWhite}>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text style={theme.fontColorPrimary}>积分3分</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../../assets/me/qdcon_x.png')} style={[styles.box, { marginRight: 20 }]} resizeMode='stretch'>
                    <Text style={theme.fontWhite}>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text style={theme.fontColorPrimary}>积分3分</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../../assets/me/qdcon_x.png')} style={[styles.box]} resizeMode='stretch'>
                    <Text style={theme.fontWhite}>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text style={theme.fontColorPrimary}>积分3分</Text>
                  </ImageBackground>
                </View>
                <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215189.jpeg' }} resizeMode='stretch' style={{ height: 90, marginTop: 30, marginHorizontal: theme.pagePadding }}></Image>
              </ImageBackground>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: { flex: 1, flexDirection: 'column' },
  bgImage: { width: '100%', height: '100%', zIndex: 0 },
  bodyContent: { paddingHorizontal: theme.pagePadding, height: '100%', overflow: 'hidden', paddingTop: 50 },
  yellowBox: { height: 30, backgroundColor: '#fff9c4', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  titleImage: { width: '100%', zIndex: 10, maxHeight: 50 },
  bodyImage: { width: '100%', height: 430, paddingTop: 40, top: -20, paddingHorizontal: theme.pagePadding, overflow: 'hidden' },
  viewContent: { marginHorizontal: theme.pagePadding, flexDirection: 'row', justifyContent: 'space-around' },
  box: { width: '33.33%', height: 110, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }
})

module.exports = SignScreen;