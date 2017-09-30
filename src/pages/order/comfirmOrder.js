import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import BasePullView from '../common/basePullView'
let theme = require('../../style')

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '确认订单',
            modalVisible:false
        }
    }

    render() {
        return (<BasePullView style={theme.flex} title={'确认订单'}>
            <Text>123456</Text>
        </BasePullView>)
    }
}

const styles = StyleSheet.create({

})