import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          home
        </Text>
        <Button
          onPress={() => navigate('Schedules')}
          title="Chat with Lucy"
         />
      </View>
    )
  }
}

module.exports = HomeScreen;
