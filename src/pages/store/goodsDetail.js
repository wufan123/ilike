import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Header from '../common/header'
import {
    ImageButton, Button
} from '../common/component'
var theme = require('../../style')

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '首页'
        }
    }

    render() {
        return (<View style={theme.flex}>
            <Header title={this.state.title} />
            <Image style={styles.image} />
            <View style={[styles.item, theme.whiteBlockWithPadding]}>
                <Text style={[theme.fontBalck, theme.font16, theme.flex]}>100套票</Text>
                <Text style={[theme.fontOrange, theme.font14]}>￥
                     <Text style={[theme.fontOrange, theme.font24]}>10</Text>
                    <Text style={[theme.fontGray, theme.font14, theme.textLineThrough]}>35</Text>
                </Text>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})