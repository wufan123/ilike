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
import theme from '../../../style/index';


class RefundRuleView extends Component {
  render() {
    return (
      <View >
        <Header title={'退款成功'}  ></Header>
        <View style={styles.view}>
          <Text style={[theme.fontBlack,theme.mb10]}>退票规则说明</Text>
          <Text>1.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
          <Text>2.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
          <Text>3.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
        </View>
        <View style={styles.view}>
          <Text style={[theme.fontBlack,theme.mb10]}>改签规则说明</Text>
          <Text>1.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
          <Text>2.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
          <Text>3.订单在影票开映前X小时可申请退票，超出时间范围不支持退票</Text>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{paddingHorizontal: theme.pagePadding,paddingVertical: theme.itemMargin,}
})

module.exports = RefundRuleView;