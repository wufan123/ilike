import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Header from '../common/header';
import { Button, RatingView } from '../common/component'
var theme = require('../../style')

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent"
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable={true}
        maxLength={40}
      />
    );
  }
}

class AppraiseScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmNum:0,
      cinemaNum:0
    }
  }

  filmNumFn(num) {
    this.setState({filmNum: num });
  }

  cinemaNumFn(num) {
    this.setState({cinemaNum: num });
  }

  render() {
    let appraiseText = ['','很差','不大好','一般般','还不错','很好']
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header title={'观影评价'} ></Header>
        <View style={styles.view}>
          <Text style={{ paddingVertical: theme.pagePadding }}>服务态度</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <RatingView style={{ width: 200, height: 25 }} rating={0} maxRating={5} onRatingChange={(num) => this.filmNumFn(num)} />
            </View>
            <Text style={theme.fontColorPrimary}>{appraiseText[this.state.filmNum]}</Text>
          </View>
          <Text style={{ paddingVertical: theme.pagePadding, marginTop: 10 }}>影城环境</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <RatingView style={{ width: 200, height: 25 }} rating={0} maxRating={5} onRatingChange={(num) => this.cinemaNumFn(num)} />
            </View>
            <Text style={theme.fontColorPrimary}>{appraiseText[this.state.cinemaNum]}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <UselessTextInput  keyboardType='default'  style={{ textAlignVertical: 'top' }} placeholder='您的建议，是我们改进的动力!' multiline={true} numberOfLines={6} ></UselessTextInput>
        </View>
        <Button buttonStyle={styles.button} text={'提交'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    marginBottom: theme.itemMargin,
    paddingHorizontal: theme.pagePadding,
    paddingVertical: theme.itemMargin,
  },
  button: {
    margin: theme.pagePadding,
    marginRight: theme.pagePadding,
    backgroundColor: theme.colorPrimary,
    borderRadius: theme.borderRadius,
  }
})

module.exports = AppraiseScreen;