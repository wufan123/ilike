import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
var theme = require('../../../style')
const { width, height } = Dimensions.get('window')
const STATE_NO_MORE = 0
const STATE_LOADING = 1

export default class CFlatList extends Component {
    static defaultProps = {
        footerViewState: STATE_NO_MORE,
        showFooterView: true,
        loadMore: null
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (<FlatList
            ListFooterComponent={this._defaultFooterView()}
            onEndReached={this._onEndReached()}
            onEndReachedThreshold={30}
            {...this.props}></FlatList>)
    }
    _onEndReached() {
        if (!this.props.loadMore)
            return
        if (this.props.footerViewState == STATE_LOADING)
            this.props.loadMore()
        else {
            return
        }
    }
    _defaultFooterView() {
        if (!this.props.showFooterView)
            return null
        if (this.props.footerViewState == STATE_NO_MORE) {
            return (<View style={[theme.alignItemsCenter, theme.justifyContentCenter, { height: 40 }]}>
                <Text style={[theme.fontGray, theme.font12]}>没有更多了</Text>
            </View>)
        }
        if (this.props.footerViewState == STATE_LOADING) {
            return (<View style={[theme.alignItemsCenter, theme.justifyContentCenter, { height: 40 }]}>
                <Text style={[theme.fontGray, theme.font12]}>正在加载</Text>
            </View>)
        }
    }
}
