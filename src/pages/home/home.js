import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SeatSelectView from '../common/SeatSelectView'
import * as WeChat from 'react-native-wechat';
import Header from '../common/header'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window')

function tabBarIcons(focused) {
  let icon = focused ? require('../../assets/tabs/icon_home_s.png') : require('../../assets/tabs/icon_home_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => tabBarIcons(focused)
  }
  constructor(props) {
    super(props)
    this.state = {
      title: '首页',
      tab: [
        '热映', '待映'
      ],
      movies: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      swiperShow: false,
    }
  }
  changeSelect(selectItem) { }

  componentDidMount() {
    setTimeout(()=>{
      console.log('hello.....')
      this.setState({
        swiperShow: true
      })
    }, 0)
  }

  _header = () => {
    console.log('swipershow ' + this.state.swiperShow)
    if(this.state.swiperShow) {
      return (
        <View style={styles.swiperContainer}>
          <Swiper autoplay={true} paginationStyle={styles.pagination} activeDotColor="#fff">
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.adImage} source={require('../../assets/lake.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.adImage} source={require('../../assets/lake.png')} />
            </View>
          </Swiper>
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.swiperContainer}>
          <View style={styles.slide}>
            <Image resizeMode="stretch" style={styles.adImage} source={require('../../assets/lake.png')} />
          </View>
        </ScrollView>
      )
    }
  }

  _footer = () => {
    return (
      <View style={styles.footer}>
        <Text style={{color: '#808080', fontSize: 12}}>已经到底啦～</Text>
      </View>
    )
  }

  _separator = () => {
    return <View style={{
      height: 1,
      backgroundColor: 'rgb(244,244,244)',
      marginHorizontal: 15
    }} />;
  }

  _reanderItem = ({ item, index }) => {
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
            <Text style={styles.scoreNum}>7.5<Text style={styles.scoreUnit}>分</Text>
            </Text>
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
              justifyContent: 'space-between',
              alignSelf: 'stretch'
            }}>
              <Text style={styles.movieSlogan}>天堂实假象，险象险中还</Text>
              <Text style={styles.movieActress}>迈克尔格林／约翰·洛根／杰</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.buyButton} onPress={() => { }}>
                <Text style={{
                  color: '#dc3c38'
                }}>购票</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  _keyExtractor = (item, index) => item;

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <Header tab={this.state.tab} changeSelect={(item) => this.changeSelect(item)} disableBack={true}></Header>
        <ScrollView style={{
          flex: 1,
        }}>
          {this._header()}
          <FlatList ListFooterComponent={this._footer} ItemSeparatorComponent={this._separator} data={this.state.movies} renderItem={this._reanderItem} keyExtractor={this._keyExtractor} />
        </ScrollView>
      </View>
    )
  };

}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  swiperContainer: {
    height: (0.5 * width) > 190 ? 190 : (0.5 * width),
  },
  slide: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999'
  },
  adImage: {
    flex: 1,
    width: width,
  },
  pagination: {
    bottom: 8
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
    backgroundColor: '#fff'
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
    color: '#3f3f3f'
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
    color: '#3f3f3f'
  },
  movieActress: {
    fontSize: 12,
    color: '#808080'
  },
  buyButton: {
    width: 46,
    height: 27,
    borderWidth: 1,
    borderColor: '#dc3c38',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    bottom: 0,
    position: 'absolute',
    right: 0
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44
  }
});

module.exports = HomeScreen;
