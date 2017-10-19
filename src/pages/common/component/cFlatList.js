import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
var theme = require('../../../style')
const { width, height } = Dimensions.get('window')
const STATE_NO_MORE = 0
const STATE_LOADING = 1

export default class CFlatList extends Component {
    static defaultProps = {
        footerViewState: STATE_NO_MORE,
        showFooterView: true,
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (<FlatList
            ListFooterComponent={this._defaultFooterView}
            onEndReached={this._onEndReached}
            onEndReachedThreshold={0.3}
            {...this.props}></FlatList>)
    }
    _onEndReached = ({ distanceFromEnd }) => {
        console.log('loading more in cflatlist....');
        if (!this.props.loadMore)
            return
        if (this.props.footerViewState == STATE_NO_MORE)
            this.props.loadMore()
        else {
            return
        }
    }
    _defaultFooterView = () => {
        if (!this.props.showFooterView)
            return null
        if (!this.props.data || this.props.data.length == 0)
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
CFlatList.propTypes = {
    ...FlatList.propTypes,
    loadMore: PropTypes.func,
    showFooterView: PropTypes.bool,
    footerViewState: PropTypes.oneOf([STATE_NO_MORE, STATE_LOADING])
}
