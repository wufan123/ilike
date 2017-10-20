/**
 * Created by guzhenfu on 17/5/9.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    Text,
    ActivityIndicator,
    View,
    Dimensions,
    TouchableHighlight,
    StyleSheet,
    NetInfo,
    FlatList
} from 'react-native';

import Pullable from './Pullable';

var theme = require('../../../style');

const LoadingState = 1;    //初始loading页面
const EmptyState = 2;    //空页面
const ErrorState = 3;    //加载数据错误
const ListState = 4;    //正常加载
const MoreState = 5;    //正在加载更多
const NoMoreState = 6;    //没有更多了
const NoMoreErrorState = 7;    //加载更多出错
const NOState = 8;//正常状态

export const STATE_NO_MORE = 0;
export const STATE_LOADING = 1;
export const STATE_NORMAL = 2;

const { width, height } = Dimensions.get('window')

export default class RefreshScrollView extends Pullable {

    static defaultProps = {
        footerViewState: STATE_NORMAL,
        showFooterView: true,
    }

    constructor(props) {
        super(props);
        this.getMetrics = this.getMetrics.bind(this);
        // this.scrollToOffset = this.scrollToOffset.bind(this);
        this.scrollToEnd = this.scrollToEnd.bind(this);
        this.currentState = NoMoreState;
        this.count = 1;
        this.preDistanceFromEnd = height;
    }

    getMetrics(args) {
        this.scroll.getMetrics(args);
    }

    // scrollToOffset(...args) {
    //     this.scroll.scrollToOffset(...args);
    // }

    scrollToEnd(args) {
        this.scroll.scrollToEnd(args);
    }

    /**
     * 对外提供API,设置列表数据
     */
    setData(_data) {
        if (_data.length == 0) {
            this.currentState = EmptyState;
        } else {
            this.currentState = ListState;
        }
        this.setState({
            data: _data,
        })
    }

    /**
     * 对外提供API, loadMore 调用
     */
    addData(_data) {
        if (_data.length == 0) {
            this.currentState = NoMoreState;

        } else {
            this.currentState = MoreState;
        }
        this.setState({
            data: this.state.data.concat(_data),
        })
    }

    /**
     * 对外提供API, 加载数据出错
     */
    setError() {
        if (this.state.data == null || this.state.data.length == 0) {
            this.currentState = ErrorState;
        } else {
            this.currentState = NoMoreErrorState;
        };
        this.forceUpdate();
    }

    /**
     * 对外提供API, 出错重新加载数据
     */
    reloadData() {
        this.currentState = LoadingState;
        this.props.onPullRelease(this.resolveHandler);
        this.forceUpdate();
    }

    /**
     * 对外提供API, 加载更多
     */
    resumeMoreDataFromError() {
        this.currentState = MoreState;
        this.props.onEndReached();
    }

    /**
     * 加载loading页面
     * @returns {XML}
     * @private
     */
    _renderLoading() {
        return (
            <View
                style={styles.contain}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    /**
     * 加载 空页面
     */
    _renderEmpty() {
        return (
            <View style={styles.contain}>
                <TouchableHighlight
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => this.reloadData()}>
                    <Text>数据为空, 点击重新加载</Text>
                </TouchableHighlight>
            </View>
        )
    }

    /**
     * 加载 出错页
     */
    _renderError() {
        return (
            <View style={styles.contain}>
                <TouchableHighlight
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => this.reloadData()}>
                    <Text>网络错误, 点击重新加载</Text>
                </TouchableHighlight>
            </View>

        )
    }

    _onEndReached = ({ distanceFromEnd }) => {
        // 判断手势是向上还是向下，向下return掉
        if ((distanceFromEnd - this.preDistanceFromEnd) > 0)
        {
            this.preDistanceFromEnd = distanceFromEnd;
            return;
        }
        this.preDistanceFromEnd = distanceFromEnd;
        // 距离底部大于60不刷新
        if (distanceFromEnd > 60)
            return;
        if (!this.props.loadMore)
            return
        if (this.props.footerViewState == STATE_NORMAL)
            this.props.loadMore()
        else {
            return
        }
    }
    _defaultFooterView = () => {
        if (!this.props.showFooterView)
            return null
        if (this.props.footerViewState == STATE_NO_MORE) {
            return (<View style={[theme.alignItemsCenter, theme.justifyContentCenter, { height: 40 }]}>
                <Text style={[theme.fontGray, theme.font12]}>没有更多了</Text>
            </View>)
        }
        if (this.props.footerViewState == STATE_LOADING) {
            return (
                <View
                    style={[styles.contain, {backgroundColor: 'transparent'}]}
                >
                    <ActivityIndicator animating size="large" />
                </View>
            )
        }
        return null
    }

    /**
     * 加载列表数据
     * @returns {XML}
     * @private
     */
    _renderList() {
        return (
            <FlatList ref={(c) => { this.scroll = c; }}
                onScroll={this.onScroll}
                scrollEnabled={this.state.scrollEnabled}
                refreshing={false}
                data={[1]}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    return (
                        this.props.children
                    );
                }}
                onEndReached={this._onEndReached}
                onEndReachedThreshold={0.7}
                ListFooterComponent={this._defaultFooterView}
            />
        );
    }

    /**
     * 加载更多 UI渲染
     * @returns {XML}
     * @private
     */
    _renderFoot() {
        if (this.currentState === NoMoreState) {
            return this.props.renderNoMore || (
                <View
                    style={styles.footer}>
                    <Text>没有更多了</Text>
                </View>
            );
        } else if (this.currentState === NoMoreErrorState) {
            return this.props.renderMoreError || (
                <TouchableHighlight
                    style={styles.footer}
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => { this.resumeMoreDataFromError() }}>
                    <Text>网络错误, 点击重新加载</Text>
                </TouchableHighlight>
            )
        } else if (this.currentState >= ListState) {
            return this.props.renderMore || (
                <View
                    style={styles.footer}>
                    <Text>正在加载</Text>
                </View>
            );
        } else {
            return null;
        }
    }

    /**
     * 类似 render() 方法,具体在父类里面
     * @returns {*}
     */
    getScrollable = () => {
        if (this.currentState === LoadingState) {
            return this.props.renderLoading || this._renderLoading();
        } else if (this.currentState === EmptyState) {
            return this.props.renderEmpty || this._renderEmpty();
        } else if (this.currentState === ErrorState) {
            return this.props.renderError || this._renderError();
        } else {
            return this._renderList()
        }
    }



}

RefreshScrollView.propTypes = {
    ...View.propTypes,
    onPullRelease: PropTypes.func,
    loadMore: PropTypes.func,
    showFooterView: PropTypes.bool,
    footerViewState: PropTypes.oneOf([STATE_NO_MORE, STATE_LOADING, STATE_NORMAL]),
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    footer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    }
});