import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Header from '../common/header';
import theme from '../../style/index';

class ChargeView extends Component {
  render() {
    return (
      <View >
        <Header title={'余额充值'}  ></Header>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

module.exports = ChargeView;