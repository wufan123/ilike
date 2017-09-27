import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from '../common/header'
import Tab from '../common/tab'
var theme = require('../../style')
const { width, height } = Dimensions.get('window')
function tabBarIcons(focused) {
  let icon = focused ? require('../../assets/tabs/icon_schedule_s.png') : require('../../assets/tabs/icon_schedule_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class ScheduleScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '排期',
    tabBarIcon: ({ focused }) => tabBarIcons(focused)
  }

  fakeSeatsInfo() {
    var seatsInfos = {};
    var rowIndex = [];
    var seats = [];
    for (var row = 1; row <= 15; row++) {
      rowIndex.push('' + row);
      rowSeats = [];
      for (var col = 1; col <= 30; col++) {
        seat = { row: '' + row, column: '' + col, seatType: ['N', 'Lk', 'E'][Math.floor(Math.random() * 3)] };
        rowSeats.push(seat);
      }
      seats.push(rowSeats);
    }
    seatsInfos = {
      row: rowIndex,
      seat: seats
    }
    return seatsInfos;
  }

  constructor(props) {
    super(props)
    console.log('seatinfos:')
    console.log(this.fakeSeatsInfo());
    this.state = {
      title: '排期',
      plan: ['星期一', '星期三', '星期二', '星期四', '星期五', '星期六', '星期日'],
      list: [
        { data: [1, 2, 3, 4, 5], title: 'section 0' },
        { data: [1, 2, 3], title: 'section 1' },
        { data: [1, 2, 3, 4], title: 'section 2' },
        { data: [1, 2,], title: 'section 3' },
      ],
    }
  }

  getPlanListData() {
    return this.state.list
  }


  _getFilmPlanListItem = ({ item, index }) => {
    return (
      <View style={[theme.whiteBlockWithPadding, styles.planItem, { borderRightWidth: index % 2 == 0 ? 1 : 0, borderColor: theme.borderColor, width: (width / 2 - theme.pagePadding) }]}>
        <View style={[theme.flex, theme.row]}>
          <Text style={[theme.flex, theme.fontBlack, theme.font24]}>9:30 </Text>
          <Text style={[theme.fontOrange, theme.font16]}>￥100.0</Text>
          <Text style={[theme.fontOrange, theme.font10]}>起</Text>
        </View>
        <Text style={[theme.flex, theme.fontGray, theme.font14]}>国语ZMX 3D
          <Text style={[theme.flex, theme.fontGray, theme.font14, theme.textLineThrough]}>100.0
          </Text>
        </Text>
      </View>
    )
  }
  _getFilmPlanListSeparator() {
    return (<View style={[theme.bottomBorder]}></View>)
  }

  _getFilmPlanList(item) {
    return (<FlatList style={[styles.planListBox, theme.mb10, theme.mt10]}
      extraData={this.state}
      data={item.data}
      keyExtractor={this._keyExtractor}
      ItemSeparatorComponent={this._getFilmPlanListSeparator}
      renderItem={this._getFilmPlanListItem}
      numColumns={2}
    />)
  }

  _filmOnPress(item, index) {
    global.navigation.navigate('ScheduleList');
  }

  getListItem = ({ item, index }) => {
    return (
      <View style={[theme.whiteBlockWithPadding]}>
        <TouchableOpacity onPress={() => this._filmOnPress(item, index)}>
          <View style={[styles.filmDetial, theme.bottomBorder]}>
            <Image style={styles.cover} source={require('../../assets/common/default_movie_bg.png')} />
            <View style={theme.flex}>
              <Text style={[theme.font18, theme.fontBlack, theme.flex]}>九层妖塔
             <Text style={[theme.font16, theme.fontOrange]}>9.5</Text>
              </Text>
              <Text style={[theme.font14, theme.fontGray, theme.flex]}>片长：120min</Text>
            </View>
            <Image style={styles.moreImg} source={require('../../assets/common/right_btn.png')} />
          </View>
        </TouchableOpacity>
        {this._getFilmPlanList(item)}
      </View>
    )
  }


  _keyExtractor = (item, index) => index
  _FilmPlanItemSeparator() {
    return (<View style={[theme.mt10]}></View>)
  }
  _getFilmList() {
    return (<FlatList style={[theme.flex, theme.mt10]}
      extraData={this.state}
      data={this.getPlanListData()}
      keyExtractor={this._keyExtractor}
      renderItem={this.getListItem}
      ItemSeparatorComponent={this._FilmPlanItemSeparator}
    />)
  }

  render() {
    return (
      <View style={theme.flex}>
        <Header showCinema={true} title={this.state.title} disableBack={true}></Header>
        <Tab tab={this.state.plan} />
        {this._getFilmList()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26,
  },
  filmDetial: {
    backgroundColor: '#ffffff',
    paddingTop: theme.pagePadding,
    paddingBottom: theme.pagePadding,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.row,
  },
  cover: {
    width: 41,
    height: 54,
    marginRight: 10,
  },
  moreImg: {
    width: 9,
    height: 16
  },
  planListBox: {
    borderColor: theme.borderColor,
    borderWidth: 1,
  },
  planItem: {
    paddingTop: theme.pagePadding,
    paddingBottom: theme.pagePadding,
  }

});

module.exports = ScheduleScreen;
