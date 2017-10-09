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
import { RefreshScrollView } from '../common/pull'
var theme = require('../../style')

class FoodOrderScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [{}, {}, {}, {}]
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

  _goToFoodDetail(){
    global.navigation.navigate('TicketDetail');
  }

  getListItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.row} onPress={() => this._goToFoodDetail()}>
          <View style={[theme.bottomBorder, { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }]}>
            <Text style={theme.fontColorPrimary}>订单号: 76080        取货码: 961358</Text>
            <Image source={require('../../assets/me/close.png')} style={{ width: 12 }} resizeMode='contain' />
          </View>
          <View style={{ paddingVertical: theme.itemMargin, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.movieThumbContainer}>
              <Image resizeMode="stretch" style={styles.movieThumb} source={{
                uri: 'http://images.zmaxfilm.com/test/zmaxyun/sale/Cache/2017-09-01/150425514938.png'
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between', marginLeft: 10 }}>
              <Text>可乐爆米花套餐</Text>
              <Text>数量：x 1</Text>
              <Text>状态：已验证</Text>
            </View>
            <View style={{ width: 30, alignItems: 'flex-end' }}>
              <Image source={require('../../assets/me/right-btn.png')} style={{ height: 15, marginTop: 20 }} resizeMode='contain' />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  getPlanListData() {
    return this.state.list
  }

  _getFoodOrderList() {
    return (<FlatList style={[theme.flex]}
      data={this.getPlanListData()}
      renderItem={this.getListItem}
    />)
  }

  render() {
    return (
      <View style={[styles.homeContainer, theme.flex]}>
        <Header title={'卖品订单'}></Header>
        <RefreshScrollView style={theme.flex} onPullRelease={(resolve) => this._onPullRelease(resolve)} >
          {this._getFoodOrderList()}
        </RefreshScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: theme.pagePadding,
    paddingVertical: theme.itemMargin,
    backgroundColor: '#ffffff',
    marginBottom: 10
  },
  movieThumbContainer: {
    height: 65,
    width: 90
  },
  movieThumb: {
    flex: 1
  },
})

module.exports = FoodOrderScreen;