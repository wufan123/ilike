import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text,
} from 'react-native';
let theme = require('../../style')

export default class extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={styles.tipInfo}>
                    <Text>
                        请在
                    </Text>
                    <Text style={{color: '#ff5353'}}>
                        14:30
                    </Text>
                    <Text>
                        内完成支付,慢了就没有座位了哦
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tipInfo: {
        backgroundColor: "#fff9c4",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})