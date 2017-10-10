import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Button } from '../common/component'
import Header from '../common/header';
import { RefreshScrollView } from '../common/pull'
import theme from '../../style/index';


class SignScreen extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Header title={'会员签到'} rightTxt={'领奖记录'} rightClick={this.rightClick}></Header>
        <Image source={require('../../assets/me/qdBg.jpg')} style={styles.bgImage} resizeMode='stretch'  >
          <View style={styles.yellowBox}>
            <Text><Image source={require('../../assets/me/tipIcon.png')}></Image> 每日须连续签到，才能领取次日签到奖品哦!</Text>
          </View>
          <ScrollView>
            <View style={styles.bodyContent}>
              <Image source={require('../../assets/me/qd-title.png')} style={styles.titleImage } resizeMode='contain'></Image>
              <Image source={require('../../assets/me/qdcon.png')} style={styles.bodyImage  } resizeMode='contain' >
                <View style={styles.viewContent }>
                  <View style={styles.box }>
                    <Text>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text>积分3分</Text>
                  </View>
                  <View style={styles.box }>
                    <Text>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text>积分3分</Text>
                  </View>
                  <View style={styles.box }>
                    <Text>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text>积分3分</Text>
                  </View>
                </View>
                <View style={[styles.viewContent,{marginTop:22}] }>
                <View style={styles.box }>
                    <Text>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text>积分3分</Text>
                  </View>
                  <View style={styles.box }>
                    <Text>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text>积分3分</Text>
                  </View>
                  <View style={styles.box }>
                    <Text>第一天</Text>
                    <Image source={{ uri: 'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215181.png' }} style={{ width: 50, height: 30, zIndex: 10 }} resizeMode='stretch'></Image>
                    <Text>积分3分</Text>
                  </View>
                </View>
                <Image source={{uri:'http://images.zmaxfilm.com/test/zmaxyun/Client/Cache/2017-08-01/150153215189.jpeg'}} style={{height:100,marginTop:30 ,marginHorizontal: theme.pagePadding}}></Image>
              </Image>
            </View>
          </ScrollView>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: { flex: 1, flexDirection: 'column'},
  bgImage:{ width: '100%', height: '100%', zIndex: 0 },
  bodyContent:{ paddingHorizontal: theme.pagePadding, paddingTop: 45, height: 520, overflow: 'hidden' },
  yellowBox: {height: 30, backgroundColor: '#fff9c4', flexDirection: 'row',justifyContent: 'center',alignItems: 'center'},
  titleImage:{width: '100%', zIndex: 10, height: 50},
  bodyImage:{width: '100%', height: 380, top: -20},
  viewContent:{marginHorizontal: theme.pagePadding, marginTop: 40, flexDirection: 'row', justifyContent: 'space-around'},
  box:{width: 50, height: 80, flexDirection: 'column', justifyContent: 'space-around'}
})

module.exports = SignScreen;