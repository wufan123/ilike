import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
    Platform,
    SectionList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCinema, loadCinemaList } from '../../../actions'

import * as WeChat from 'react-native-wechat';
import Header from '../../common/header';
import Swiper from 'react-native-swiper';
import { RefreshScrollView } from '../../common/pull'
import theme from '../../../style/index'
import pageUtil from '../../../utils/pageUtil'

const { width, height } = Dimensions.get('window')

const mapStateToProps = function (store) {
    return ({
        currentCinema: store.cinema.currentCinema,
        cinemaList: store.cinema.cinemaList
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            selectCinema,
            loadCinemaList
        },
        dispatch
    );

class Cinema extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '选择影城',
            tCinema: {
                name: '影城1',
                address: '福州',
                phone: '10086',
            }
        }
    }

    componentDidMount() {
        this.props.loadCinemaList();
    }



    _keyExtractor = (item, index) => item;

    /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(resolve) {
        setTimeout(() => {
            resolve();
            this.moreTime = 0;
        }, 3000);
    }

    /**
    * 加载更多  数据加载
    * @private
    */
    _loadMore() {
    }


    _sectionHeader({ section }) {
        return (
            <View style={styles.sectionHeader}>
                <Text style={[theme.font16, theme.fontBlack]}>
                    {section.cityName}
                </Text>
            </View>
        );
    }

    _footer = () => {
        return (
            <View style={styles.footer}>
                <Text style={[theme.font12, theme.fontGray]}>已经到底啦～</Text>
            </View>
        )
    }

    _separator = () => {
        return <View style={{
            height: 1,
            backgroundColor: 'rgb(244,244,244)',
            marginHorizontal: 15
        }} />;
    }

    _selectCinema = (cinema) => {
        let firstChoose = this.props.currentCinema ? false : true
        this.props.selectCinema(cinema);
        if (firstChoose) {
            pageUtil.navigate("MainPage")
        } else {
            pageUtil.goBack()
        }


    }

    _renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this._selectCinema(item)}>
                <View style={[theme.row, theme.whiteBlockWithPadding, styles.item]}>
                    <View style={[theme.flex]}>
                        <Text style={[theme.flex, theme.fontBlack, theme.font16, theme.mt15]}>{item.cinemaName}</Text>
                        <Text style={[theme.flex, theme.fontGray, theme.font12]}>{item.address}</Text>
                    </View>
                    <Image style={styles.itemImg} source={require('../../../assets/common/right_btn.png')} />
                </View>
            </TouchableOpacity>
        );
    }

    renderList() {
        if (this.cinemaList == null) {
            this.cinemaList = (
                <SectionList
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderSectionHeader={this._sectionHeader}
                    sections={this.props.cinemaList}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                    scrollEnabled={false}
                />
            );
        }
        return this.cinemaList;
    }

    render() {
        return (
            <View style={theme.flex}>
                <Header title={this.state.title} showBack={this.props.currentCinema}></Header>
                <RefreshScrollView
                    onPullRelease={(resolve) => this._onPullRelease(resolve)}
                >
                    {this.renderList()}
                </RefreshScrollView>
            </View>
        )
    };

}

const styles = StyleSheet.create({
    sectionHeader: {
        paddingLeft: theme.pagePadding,
        paddingTop: 10,
        paddingBottom: 10
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 82,
    },
    itemImg: {
        width: 9,
        height: 17,
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cinema);