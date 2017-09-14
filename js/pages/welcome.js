import React, { Component } from 'react';
import { Text, Button } from 'react-native';

class Welcome extends Component {

    render() {
        let { navigate } = this.props.navigation
        return (
            <Button title="click"
                onPress={
                    () => navigate('MainPage')
                }
            />
        );
    }
}

export default Welcome