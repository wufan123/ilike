import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import Header from '../common/header';
import theme from '../../style/index';
import ScrollViewPage from '../common/basePullPage'

class AllPrivilegeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recordList: [1,2,3,4,5,6]
    }
  }

  _onPullReleaseFn() {

  }

  _renderRecord = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>签到领取3积分</Text>
        <Text>2017-10-16</Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollViewPage title={'积分记录'} onPullRelease={() => { this._onPullReleaseFn() }} >
        <View>
          <FlatList data={this.state.recordList} renderItem={this._renderRecord} ></FlatList>
        </View>
      </ScrollViewPage>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    paddingHorizontal: theme.pagePadding,
    paddingVertical: theme.itemMargin,
    backgroundColor:'#ffffff',
    borderBottomWidth:0.5,
    borderBottomColor:'#e8e8e8'
  },
  title:{
    color:'#3f3f3f'
  }

})

module.exports = AllPrivilegeView;