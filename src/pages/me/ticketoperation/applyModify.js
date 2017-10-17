import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import Header from '../../common/header';
import { Button } from '../../common/component'
import theme from '../../../style/index';


class ReplayModifyView extends Component {
  render() {
    return (
      <View style={styles.pageSty} >
        <Header title={'申请改签'}  ></Header>
          <View style={styles.view}>
            <Text style={[theme.fontBlack,theme.mb10,{paddingVertical: theme.itemMargin,borderBottomWidth: 0.5, borderBottomColor: '#e8e8e8'}]}>改签规则说明</Text>
            <Text>1.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
            <Text>2.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
            <Text>3.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
          </View>
          <Button text={'确认退票'} buttonStyle={{backgroundColor: theme.colorPrimary,marginHorizontal:10,marginVertical:10}}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageSty: { flex: 1 },
  view: { paddingVertical: theme.itemMargin, backgroundColor: '#ffffff',paddingHorizontal: theme.pagePadding }
})

module.exports = ReplayModifyView;