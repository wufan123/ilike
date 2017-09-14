import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SeatSelectView from '../../common/SeatSelectView'
const { width, height } = Dimensions.get('window')

function tabBarIcons(focused) {
  if (focused) {
    return (
      <Image
        source={require('../../../resources/tabs/icon_home_s.png')}
        style={[styles.tab_icon]}
      />
    );
  }
  else {
    return (
      <Image
        source={require('../../../resources/tabs/icon_home_n.png')}
        style={[styles.tab_icon]}
      />
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => tabBarIcons(focused)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <Button
          onPress={() => navigate('Schedule')}
          title="Chat with Lucy"
         />
      </View>
    )
  };

}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26,
  },
});


module.exports = HomeScreen;
