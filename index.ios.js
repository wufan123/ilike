/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Zmfilm from './js/pages/setup';
// import { StackNavigator } from 'react-navigation';
//
// export default class HomeScreen extends Component {
//   render() {
//     console.log('hello')
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <Button
//           onPress={() => navigate('Chat')}
//           title="Chat with Lucy"
//         />
//       </View>
//     );
//   }
// }
//
// class ChatScreen extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Chat with Lucy</Text>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   Chat: { screen: ChatScreen },
// });

AppRegistry.registerComponent('zmfilm', () => Zmfilm);
