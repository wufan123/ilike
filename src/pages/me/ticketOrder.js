import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native';
import Header from '../common/header';
import { Tab } from '../common/component'
import { RefreshScrollView } from '../common/pull'
var theme = require('../../style')

class TicketOrderScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
        tabs: ['完成订单', '退票订单', '异常订单'],
        list: [
          {data: [1, 2, 3, 4, 5], title: 'section 0'},
          {data: [1, 2, 3], title: 'section 1'},
          {data: [1, 2, 3, 4], title: 'section 2'},
          {data: [1, 2,], title: 'section 3'},
      ]
    }
  }

  /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(resolve) {
      setTimeout(() => {
          resolve();
          this.moreTime = 0;
      }, 3000);
  }
  _FilmPlanItemSeparator() {
    return (<View style={[theme.mt10]}></View>)
}

_filmOnPress(item, index) {
  global.navigation.navigate('ScheduleList');
}

getListItem = ({item, index}) => {
  let collectIcon = false ? require('../../assets/home/icon_collect.png') : require('../../assets/home/icon_uncollect.png')
    return (
      <View style={styles.row}>
                <View style={styles.movieThumbContainer}>
                    <Image resizeMode="stretch" style={styles.movieThumb} source={{
                        uri: 'http://img5.mtime.cn/pi/2017/03/23/233340.20916876_1000X1000.jpg'
                    }} />
                </View>
                <View style={styles.movieDetailContainer}>
                    <View style={styles.titleScoreContainer}>
                        <Text style={styles.movieTitle}>异形：契约</Text>
                        <Image source={require('../../assets/me/close.png')} style={{width:12}}  resizeMode='contain'/>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        ...Platform.select({
                            ios: {
                                marginTop: 15
                            },
                            android: {
                                marginTop: 8
                            }
                        })
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            alignSelf: 'stretch'
                        }}>
                            <Text style={styles.movieSlogan}><Text>影院： </Text>中瑞南华影院(三坊七巷店)</Text>
                            <Text style={styles.movieSlogan}><Text>场次： </Text>周六 08-19 19：00</Text>
                            <Text style={[styles.movieSlogan,{color:theme.colorPrimary}]}><Text>状态： </Text>支付完成</Text>
                        </View>
                        <View style={{ width: 46, }}>
                            <TouchableOpacity style={styles.buyButton} onPress={() => {
                            }}>
                                <Image source={collectIcon} style={{ width: 12, height: 12 }} />
                                <Text style={{
                                    color: theme.colorPrimary
                                }}>关注</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
  )
  }

  _keyExtractor = (item, index) => index

  getPlanListData() {
    return this.state.list
}

  _getOrderList(){
    return (<FlatList style={[theme.flex, theme.mt10]}
      extraData={this.state}
      keyExtractor={this._keyExtractor}
      data={this.getPlanListData()}
      renderItem={this.getListItem}
      ItemSeparatorComponent={this._FilmPlanItemSeparator}
/>)
  }

  render() {
    return (
      <View style={[styles.homeContainer, theme.flex]}>
        <Header title={'影票'}></Header>
        <Tab tab={this.state.tabs} />
        <RefreshScrollView style={theme.flex} onPullRelease={(resolve) => this._onPullRelease(resolve)} >
            {this._getOrderList()}
        </RefreshScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
    backgroundColor: theme.backgroundColor
},
movieThumbContainer: {
    height: 80,
    width: 60
},
movieThumb: {
    flex: 1
},
movieDetailContainer: {
    flex: 1,
    paddingVertical: 7,
    alignSelf: 'stretch',
    marginLeft: 12
},
titleScoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},
movieTitle: {
    fontSize: 16,
    color: theme.fontColorBlack
},
scoreNum: {
    fontSize: 14,
    color: '#fc9d40'
},
scoreUnit: {
    fontSize: 11,
    color: '#fc9d40'
},
movieSlogan: {
    fontSize: 12,
    color: theme.fontColorBlack
},
movieActress: {
    fontSize: 12,
    color: theme.fontColorGray
},
buyButton: {
    flexDirection: 'row',
    width: 46,
    height: 27,
    borderWidth: 1,
    borderColor: theme.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    bottom: 0,
    position: 'absolute',
    right: 0
}
})

module.exports = TicketOrderScreen;