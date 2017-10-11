import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

class CheckBoxView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressState: false
    }
    this._onPressIn =this._onPressIn.bind(this)
  }

  _onPressIn() {
    this.setState({
      pressState: !this.state.pressState
    })
    if(this.props.oncheckChange) this.props.oncheckChange(this.state.pressState)
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this._onPressIn()}>
          <Image source={this.state.pressState? require('../../../assets/me/radio.png'): require('../../../assets/me/radio-.png')} style={styles.checkbox}  resizeMode='contain'></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  checkbox:{
    width:20,
    height:20
  }
})

CheckBoxView.propTypes = {
  ...View.propTypes,
  oncheckChange: PropTypes.func
}

module.exports = CheckBoxView;