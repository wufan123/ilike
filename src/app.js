import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'


const App = StackNavigator(
    {
        MainPage: { screen: MainPage },
        Welcome: { screen: Welcome }
    },
    {
        navigationOptions: {
            header: null,
        }
    });



export default App