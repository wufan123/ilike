import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';
import Header from '../common/header'
var theme = require('../../style')

function tabBarIcons(focused) {
  let icon = focused ? require('../../assets/tabs/icon_goods_s.png') : require('../../assets/tabs/icon_goods_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class GoodsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '卖品',
    tabBarIcon: ({ focused }) => tabBarIcons(focused)
  }

  constructor(props) {
    super(props)
    this.state = {
      tab: ['小吃', '套票'],
      curTab: '小吃',
      goodsList: [1, 2, 3, 4, 5, 6, 7, 8],
      comboList: [{ goodsList: [1, 2] }, { goodsList: [1, 2] }, { goodsList: [1, 2] }, { goodsList: [1, 2] }, { goodsList: [1, 2] }]
    }
  }

  changeSelect(selectItem) {
    this.state.curTab = selectItem
    this.setState(this.state)
  }

  _keyExtractor = (item, index) => item

  getGoodsListItem = ({ item, index }) => {
    return (
      <View style={[styles.itemContainer, theme.flex]}>
        <Image style={styles.image} source={require('../../assets/common/default_goods.png')}>
        </Image>
        <View style={[theme.flex, styles.rigth]}>
          <Text style={[theme.fontBalck, theme.font16]}>双人套餐</Text>
          <Text style={[theme.fontGray, theme.font12]}>一份爆米花+一份可乐</Text>
          <Text style={[theme.fontOrange, theme.font16]}>￥30
          <Text style={[theme.fontGray, theme.font12, theme.textLineThrough]} >￥35</Text>
          </Text>
          <View style={styles.operation}>
            <Image style={styles.operationItem} source={require('../../assets/store/subtract.png')} />
            <Text style={styles.operationNum}>1</Text>
            <Image style={styles.operationItem} source={require('../../assets/store/add.png')} />
          </View>
        </View>
      </View>
    )
  }
  getComboListItem = ({ item, index }) => {
    return (
      <View style={[styles.comboContainer, theme.flex]}>
        <View style={[styles.comboTitle, theme.flex]}>
          <Text style={[theme.font16, theme.fontBalck, theme.flex]}>199礼盒套装</Text>
          <Text style={[theme.font16, theme.fontOrange]}>￥199</Text>
        </View>
        <View style={[styles.comboGoodsList, theme.flex]}>
          {
            item.goodsList.map(
              (goodsItem, goodsItemIndex) => {
                return (
                  <View style={styles.comboGoodsItem} key={goodsItemIndex}>
                    <Image style={styles.image} source={require('../../assets/common/default_goods.png')} />
                    <View style={[theme.flex, styles.rigth]}>
                      <Text style={[theme.fontBalck, theme.font16,theme.flex]}>双人套餐</Text>
                      <Text style={[theme.fontGray, theme.font12,theme.flex]}>数量：x2</Text>
                    </View>
                  </View>
                )
              }
            )
          }
          <View style={styles.operation}>
            <Image style={styles.operationItem} source={require('../../assets/store/subtract.png')} />
            <Text style={styles.operationNum}>1</Text>
            <Image style={styles.operationItem} source={require('../../assets/store/add.png')} />
          </View>
        </View>

      </View>

    )
  }


  render() {

    return (<View >
      <Header tab={this.state.tab} changeSelect={(item) => this.changeSelect(item)} disableBack={true}></Header>
      <FlatList
        data={this.state.curTab == this.state.tab[0] ? this.state.goodsList : this.state.comboList}
        keyExtractor={this._keyExtractor}
        renderItem={this.state.curTab == this.state.tab[0] ? this.getGoodsListItem : this.getComboListItem}
      />
    </View>
    )

  }
}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    marginBottom: theme.itemMargin,
    padding: theme.pagePadding,
    flexDirection: 'row'
  },
  image: {
    borderRadius: theme.borderRadius,
    width: 83,
    height: 60,
    marginRight: 10,
  },
  rigth: {
    position: 'relative',
  },
  operation: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
  },
  operationItem: {
    width: 26,
    height: 26,
  },
  operationNum: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 3
  },

  comboContainer: {
    backgroundColor: '#ffffff',
    marginBottom: theme.itemMargin,
    padding: theme.pagePadding,
  },
  comboTitle: {
    flexDirection: 'row'
  },
  comboGoodsList: {
    position: 'relative'
  },
  comboGoodsItem: {
    marginTop: theme.itemMargin,
    flexDirection: 'row'
  }


});

module.exports = GoodsScreen;
