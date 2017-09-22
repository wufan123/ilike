import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from '../common/header'
import {
  ImageButton, Button
} from '../common/component'
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
      goodsCount: 0,
      comboCount: 0,
      goodsList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
      comboList: [{ goodsList: [1, 2] }, { goodsList: [1, 2] }, { goodsList: [1, 2] }, { goodsList: [1, 2] }, { goodsList: [1, 2] }]
    }
  }

  changeSelect(selectItem) {
    this.state.curTab = selectItem
    this.setState(this.state)
  }

  _keyExtractor = (item, index) => index

  _onSubPress(item, index) {
    if (this.state.curTab == this.state.tab[0]) {
      if (!this.state.goodsList[index].num)
        return
      this.state.goodsList[index].num--
      this.state.goodsCount--
      this.setState(this.state)
    }
    if (this.state.curTab == this.state.tab[1]) {
      if (!this.state.comboList[index].num)
        return
      this.state.comboList[index].num--
      this.state.comboCount--
      this.setState(this.state)
    }
  }
  _onAddPress(item, index) {

    if (this.state.curTab == this.state.tab[0]) {
      if (!this.state.goodsList[index].num)
        this.state.goodsList[index].num = 0
      this.state.goodsList[index].num++
      this.state.goodsCount++
      this.setState(this.state)
    }
    if (this.state.curTab == this.state.tab[1]) {
      if (!this.state.comboList[index].num)
        this.state.comboList[index].num = 0
      this.state.comboList[index].num++
      this.state.comboCount++
      this.setState(this.state)
    }
  }

  gotoDetail() {
    global.navigation.navigate('GoodsDetail');  
  }

  getGoodsListItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={()=>this.gotoDetail()}> 
        <View style={[styles.itemContainer, theme.flex]} >
          <Image style={styles.image} source={require('../../assets/common/default_goods.png')}>
          </Image>
          <View style={[theme.flex, styles.rigth]}>
            <Text style={[theme.fontBalck, theme.font16]}>双人套餐</Text>
            <Text style={[theme.fontGray, theme.font12]}>一份爆米花+一份可乐</Text>
            <Text style={[theme.fontOrange, theme.font16]}>￥30
          <Text style={[theme.fontGray, theme.font12, theme.textLineThrough]} >￥35</Text>
            </Text>
            <View style={styles.operation}>
              {item.num && item.num > 0 ? (<ImageButton style={styles.operationItem}
                source={require('../../assets/store/subtract.png')}
                activeSource={require('../../assets/store/subtract_on.png')}
                onPress={() => this._onSubPress(item, index)} />) : null}
              {item.num && item.num > 0 ? (<Text style={styles.operationNum}>{item.num ? item.num : 0}</Text>) : null}
              <ImageButton style={styles.operationItem}
                source={require('../../assets/store/add.png')}
                activeSource={require('../../assets/store/add_on.png')}
                onPress={() => this._onAddPress(item, index)} />
            </View>
          </View>
        </View> 
      </TouchableOpacity>  
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
                      <Text style={[theme.fontBalck, theme.font16, theme.flex]}>双人套餐</Text>
                      <Text style={[theme.fontGray, theme.font12, theme.flex]}>数量：x2</Text>
                    </View>
                  </View>
                )
              }
            )
          }
          <View style={styles.operation}>
            {item.num && item.num > 0 ? (<ImageButton style={styles.operationItem}
              source={require('../../assets/store/subtract.png')}
              activeSource={require('../../assets/store/subtract_on.png')}
              onPress={() => this._onSubPress(item, index)} />) : null}
            {item.num && item.num > 0 ? (<Text style={styles.operationNum}>1</Text>) : null}
            <ImageButton style={styles.operationItem}
              source={require('../../assets/store/add.png')}
              activeSource={require('../../assets/store/add_on.png')}
              onPress={() => this._onAddPress(item, index)} />
          </View>
        </View>

      </View>

    )
  }

  getSubmitButton() {
    console.log("tttttttt", this.state.goodsCount)
    if (this.state.curTab == this.state.tab[0] && this.state.goodsCount > 0) {
      return (<Button text={'去支付(' + this.state.goodsCount + ')'} />)
    }
    if (this.state.curTab == this.state.tab[1] && this.state.comboCount > 0) {
      return (<Button text={'去支付(' + this.state.comboCount + ')'} />)
    }
    return null
  }


  render() {

    return (<View style={theme.flex}  >
      <Header tab={this.state.tab} changeSelect={(item) => this.changeSelect(item)} disableBack={true}></Header>
      <FlatList style={theme.flex}
        extraData={this.state}
        data={this.state.curTab == this.state.tab[0] ? this.state.goodsList : this.state.comboList}
        keyExtractor={this._keyExtractor}
        renderItem={this.state.curTab == this.state.tab[0] ? this.getGoodsListItem : this.getComboListItem}
      />
      {this.getSubmitButton()}
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
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingTop: 2
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
  },
  submitButton: {
    backgroundColor: '#fc9d40',
    ...theme.buttonOrange
  }


});

module.exports = GoodsScreen;
