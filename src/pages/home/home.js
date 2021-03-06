import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
    Platform,
    SectionList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as WeChat from 'react-native-wechat';
import Header from '../common/header';
import Swiper from 'react-native-swiper';
import { RefreshScrollView } from '../common/pull'
import globalStyle from '../../style/index'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHotMovies, getCommingMovies } from '../../actions'

const { width, height } = Dimensions.get('window')

const mapStateToProps = function (store) {
    return ({
        cinemaCode: store.cinema.cinemaCode,
        hotMovies: store.movies.hotMovies||[],
        commingMovies: store.movies.commingMovies||[]
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getHotMovies,
            getCommingMovies
        },
        dispatch
    );

function tabBarIcons(focused) {
    let icon = focused ? require('../../assets/tabs/icon_home_s.png') : require('../../assets/tabs/icon_home_n.png')
    return (
        <Image
            source={icon}
            style={[styles.tab_icon]}
        />
    );
}

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => tabBarIcons(focused)
    }

    constructor(props) {
        super(props)
        this.state = {
            title: '首页',
            tab: [
                '热映', '待映'
            ],
            commingMovies: [
                { data: [1, 2, 3, 4, 5], title: 'section 0' },
                { data: [1, 2, 3], title: 'section 1' },
                { data: [1, 2, 3, 4], title: 'section 2' },
                { data: [1, 2,], title: 'section 3' },
            ],
            swiperShow: false,
            curTab: 0
        },
            this.hotList = null,
            this.commingList = null
    }

    changeSelect(selectItem) {
        let curTab = 0;
        switch (selectItem) {
            case '热映':
                curTab = 0;
                break;
            case '待映':
                curTab = 1;
                break;
        }
        this.setState({
            curTab: curTab
        })
    }

    componentDidMount() {
        this.props.getHotMovies(this.props.cinemaCode)
        this.props.getCommingMovies(this.props.cinemaCode)
        setTimeout(() => {
            this.setState({
                swiperShow: true
            })
        }, 0)
    }

    _header = () => {
        if (this.state.swiperShow) {
            return (
                <View style={styles.swiperContainer}>
                    <Swiper autoplay={true} paginationStyle={styles.pagination} activeDotColor="#fff">
                        <View style={styles.slide}>
                            <Image resizeMode="stretch" style={styles.adImage}
                                source={require('../../assets/lake.png')} />
                        </View>
                    </Swiper>
                </View>
            );
        } else {
            return (
                <View style={styles.swiperContainer}>
                    <View style={styles.slide}>
                        <Image resizeMode="stretch" style={styles.adImage} source={require('../../assets/lake.png')} />
                    </View>
                </View>
            )
        }
    }

    _footer = () => {
        return (
            <View style={styles.footer}>
                <Text style={{ color: globalStyle.fontColorGray, fontSize: 12 }}>已经到底啦～</Text>
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

    _navigateToMovieDetail() {
        global.navigation.navigate('MovieDetail');
    }
    _gotoSchedule() {
        global.navigation.navigate('ScheduleList');
    }

    _reanderItem = ({ item, index }) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    this._navigateToMovieDetail()
                }}
            >
                <View style={styles.row}>
                    <View style={styles.movieThumbContainer}>
                        <Image resizeMode="stretch" style={styles.movieThumb} source={{
                            uri: item.image
                        }} />
                    </View>
                    <View style={styles.movieDetailContainer}>
                        <View style={styles.titleScoreContainer}>
                            <Text style={styles.movieTitle}>{item.filmName}</Text>
                            <Text style={styles.scoreNum}>{item.score||0}<Text style={styles.scoreUnit}>分</Text>
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            ...Platform.select({
                                ios: {
                                    marginTop: 15
                                },
                                android: {
                                    marginTop: 8
                                }
                            })
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'space-between',
                                alignSelf: 'stretch'
                            }}>
                                <Text style={styles.movieSlogan}><Text>导演： </Text>{item.director||''}</Text>
                                <Text style={styles.movieActress} numberOfLines={1}><Text style={globalStyle.fontBalck}>主演： </Text>{item.cast}</Text>
                            </View>
                            <View style={{ width: 46, }}>
                                <TouchableOpacity style={styles.buyButton} onPress={() => this._gotoSchedule(item)}>
                                    <Text style={{
                                        color: globalStyle.colorPrimary
                                    }}>购票</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _renderCommingMovieItem = ({ item }) => {
        let collectIcon = false ? require('../../assets/home/icon_collect.png') : require('../../assets/home/icon_uncollect.png')
        return (
            <View style={styles.row}>
                <View style={styles.movieThumbContainer}>
                    <Image resizeMode="stretch" style={styles.movieThumb} source={{
                        uri: item.image
                    }} />
                </View>
                <View style={styles.movieDetailContainer}>
                    <View style={styles.titleScoreContainer}>
                        <Text style={styles.movieTitle}>{item.filmName}</Text>
                        <Text style={[globalStyle.fontGray, globalStyle.font14]}>{item.duration}min</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        ...Platform.select({
                            ios: {
                                marginTop: 15
                            },
                            android: {
                                marginTop: 8
                            }
                        })
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            alignSelf: 'stretch'
                        }}>
                            <Text style={styles.movieSlogan} numberOfLines={2}><Text>主演： </Text>{item.cast}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/home/icon_like.png')}
                                    style={{ width: 8, height: 12 }}
                                />
                                <Text style={[globalStyle.fontOrange, globalStyle.font12]}
                                    numberOfLines={1}>{item.lookNum}影迷关注</Text>
                            </View>
                        </View>
                        <View style={{ width: 46, }}>
                            <TouchableOpacity style={styles.buyButton} onPress={() => {
                            }}>
                                <Image source={collectIcon} style={{ width: 12, height: 12 }} />
                                <Text style={{
                                    color: globalStyle.colorPrimary
                                }}>关注</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _keyExtractor = (item, index) => index;

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

    renderHotTabList() {
        if (this.hotList == null) {
            this.hotList = (
                <FlatList
                    ref={(list) => this._listRef = list}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    data={this.props.hotMovies}
                    renderItem={this._reanderItem}
                    keyExtractor={this._keyExtractor}
                    scrollEnabled={false} />
            )
        }
        return this.hotList;
    }

    _commingSectionHeader({ section }) {
        return (
            <View style={styles.commingSectionHeader}>
                <Text style={{ fontSize: 15, color: globalStyle.fontColorGray, }}>
                    {section.time}
                </Text>
            </View>
        );
    }

    renderCommingTabList() {
        if (this.commingList == null) {
            this.commingList = (
                <SectionList
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderSectionHeader={this._commingSectionHeader}
                    sections={this.props.commingMovies}
                    renderItem={this._renderCommingMovieItem}
                    keyExtractor={(item, index) => index}
                    scrollEnabled={false}
                />
            );
        }
        return this.commingList;
    }

    renderListWithTab() {
        if (this.state.curTab == 0) return this.renderHotTabList();
        else if (this.state.curTab == 1) return this.renderCommingTabList();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.homeContainer}>
                <StatusBar
                    hidden={false}
                    barStyle={'light-content'}
                />
                <Header showCinema={true} tab={this.state.tab} changeSelect={(item) => this.changeSelect(item)}
                    disableBack={true} />
                <RefreshScrollView
                    onPullRelease={(resolve) => this._onPullRelease(resolve)}
                >
                    {this._header()}
                     {this.renderListWithTab()}
                </RefreshScrollView>
            </View>
        )
    };

}

const styles = StyleSheet.create({
    tab_icon: {
        width: 26,
        height: 26
    },
    homeContainer: {
        flex: 1,
        backgroundColor: globalStyle.pageBackground
    },
    swiperContainer: {
        height: (0.5 * width) > 190 ? 190 : (0.5 * width),
        width: width,
    },
    slide: {
        /**
         * 需要设置下height，不然下拉后图片变形
         */
        height: (0.5 * width) > 190 ? 190 : (0.5 * width),
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adImage: {
        flex: 1,
        width: width,
    },
    pagination: {
        bottom: 8
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: 'relative',
        backgroundColor: globalStyle.backgroundColor
    },
    movieThumbContainer: {
        height: 80,
        width: 60
    },
    movieThumb: {
        flex: 1
    },
    movieDetailContainer: {
        flex: 1,
        paddingVertical: 7,
        alignSelf: 'stretch',
        marginLeft: 12
    },
    titleScoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    movieTitle: {
        fontSize: 16,
        color: globalStyle.fontColorBlack
    },
    scoreNum: {
        fontSize: 14,
        color: '#fc9d40'
    },
    scoreUnit: {
        fontSize: 11,
        color: '#fc9d40'
    },
    movieSlogan: {
        fontSize: 12,
        color: globalStyle.fontColorBlack
    },
    movieActress: {
        fontSize: 12,
        color: globalStyle.fontColorGray
    },
    buyButton: {
        flexDirection: 'row',
        width: 46,
        height: 27,
        borderWidth: 1,
        borderColor: globalStyle.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        bottom: 0,
        position: 'absolute',
        right: 0
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44
    },
    commingSectionHeader: {
        paddingHorizontal: 15,
        height: 30,
        justifyContent: 'center'
    },
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
