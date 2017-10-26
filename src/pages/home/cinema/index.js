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
import { selectCinema } from '../../../actions'

import * as WeChat from 'react-native-wechat';
import Header from '../../common/header';
import Swiper from 'react-native-swiper';
import { RefreshScrollView } from '../../common/pull'
import theme from '../../../style/index'

const { width, height } = Dimensions.get('window')

const mapStateToProps = state => ({
    currentCinema: state.cinema.currentCinema,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            selectCinema,
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
            },
            cinemaList: [
                { data: [1, 2, 3, 4, 5], title: '福州市' },
                { data: [1, 2, 3], title: '池州市' },
            ],
        }
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
                    {section.title}
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

    selectCinema = (cinema) => {
        this.props.selectCinema(this.state.tCinema);
        this.props.navigation.goBack()
    }

    _renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this.selectCinema(item)}>
                <View style={[theme.row, theme.whiteBlockWithPadding, styles.item]}>
                    <View style={[theme.flex]}>
                        <Text style={[theme.flex, theme.fontBlack, theme.font16, theme.mt15]}>中瑞国际影城红星店</Text>
                        <Text style={[theme.flex, theme.fontGray, theme.font12]}>台江区工业路红星美凯龙（宝龙城市广场旁）7楼</Text>
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
                    sections={this.state.cinemaList}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                    scrollEnabled={false}
                />
            );
        }
        return this.cinemaList;
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={theme.flex}>
                <Header title={this.state.title} ></Header>
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

const CinemaScreen = connect(mapStateToProps, mapDispatchToProps)(Cinema);

module.exports = CinemaScreen;