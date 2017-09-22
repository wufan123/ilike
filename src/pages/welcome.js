import React, { Component } from 'react';
import { Text, Button } from 'react-native';

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // 处理数据源
        global.navigation = this.props.navigation;
        global.navigation.navigate('MainPage')

    }

    render() {
        return (
            <Button title="click"
                onPress={
                    () => global.navigate('MainPage')
                }
            />
        );
    }
}

export default Welcome