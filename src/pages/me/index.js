import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from '../common/header'
import { RefreshScrollView } from '../common/pull'
import { Button } from '../common/component'
import accountBusiness from '../../business/accountBusiness'
var theme = require('../../style')


function tabBarIcons(focused) {
    let icon = focused ? require('../../assets/tabs/icon_me_s.png') : require('../../assets/tabs/icon_me_n.png')
    return (
        <Image
            source={icon}
            style={[styles.tab_icon]}
        />
    );
}

class ItemComponet extends Component {
    static defaultProps = {
        onPress: null,
        source: null,
        title: '',
        subTitle: '',
        marginTop: false,
        borderBottom: false,
    };

    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress} style={[this.props.marginTop ? theme.mt10 : null, this.props.borderBottom ? theme.bottomBorder : null]}>
                <View style={[styles.item, theme.whiteBlockWithPadding, theme.row]}>
                    <Image style={styles.itemImg} source={this.props.source} />
                    <Text style={[theme.fontBlack, theme.font16]}>{this.props.title}</Text>
                    <Text style={[theme.fontGray, theme.font14, theme.flex]}>{this.props.subTitle}</Text>
                    <Image style={styles.rightImg} source={require('../../assets/common/right_btn.png')} />
                </View>
            </TouchableOpacity>
        )
    }

}

export default class MeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused }) => tabBarIcons(focused)
    }

    constructor(props) {
        super(props)
        let items = this._getItemsData()
        this.state = {
            items: items
        }
    }
    componentDidMount() {
        accountBusiness.login('15396005445','123456')
        .then(res=>{
            console.log("============res",res) 
        })
        .catch(reason=>{
            console.log("============reason",reason) 
        })
    }
    _getItemsData() {
        return [
            {
                id: 'unCheckedTicket',
                title: '待取票',
                marginTop: true,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl: "UnWatchMovieTicket",
            },
            {
                id: 'memberSignIn',
                title: '会员签到',
                marginTop: false,
                borderBottom: false,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl: 'Sign'
            },
            {
                id: 'account',
                title: '我的账户',
                marginTop: true,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl: 'Alcard'
            },
            {
                id: 'recharge',
                title: '账户充值',
                marginTop: false,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl: 'Charge'
            },
            {
                id: 'refund',
                title: '退票中心',
                marginTop: false,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl:'Ticketoperation'
            },
            {
                id: 'card',
                title: '影城会员卡',
                marginTop: false,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png')
            },
            {
                id: 'coupon',
                title: '优惠券',
                marginTop: false,
                borderBottom: false,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl:'Coupon'
            },
            {
                id: 'expenseRecord',
                title: '消费记录',
                marginTop: true,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl:'Consumerec'
            },
            {
                id: 'integralRecord',
                title: '积分记录',
                marginTop: false,
                borderBottom: false,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl:'Scorerec'
            },
            {
                id: 'feedback',
                title: '意见反馈',
                marginTop: true,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl: 'Helpback'
            },
            {
                id: 'customerService',
                title: '联系客服',
                marginTop: false,
                borderBottom: true,
                image: require('../../assets/me/icon_refund.png')
            },
            {
                id: 'setting',
                title: '设置',
                marginTop: false,
                borderBottom: false,
                image: require('../../assets/me/icon_refund.png'),
                goToUrl: 'Setting',
            },
        ]
    }
    _gotoTicketOrder() {
        global.navigation.navigate('TicketOrder');
    }
    _gotoGoodsOrder() {
        global.navigation.navigate('FoodOrder');
    }
    _gotoComboOrder() {

    }
    _itemClick(name) {
        global.navigation.navigate(name);
    }
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

    _navigateToLogin() {
        global.navigation.navigate('Login');
    }

    /**
    * 加载更多  数据加载
    * @private
    */
    _loadMore() {
    }
    render() {
        global.tabNavigation = this.props.navigation;
        return (<View style={theme.flex}>
            <Header disableBack={true}></Header>
            <RefreshScrollView style={theme.flex} onPullRelease={(resolve) => this._onPullRelease(resolve)}>
                <View style={styles.top}>
                    <View style={styles.avatarbox}>
                        <Image style={[styles.avatarImg]} source={require('../../assets/me/default_portrait.png')}></Image>
                    </View>
                    <Text style={[theme.fontWhite, theme.font16, theme.mt10]}>用户名</Text>
                    <View style={[theme.row, theme.mt5]}>
                        <Text style={[theme.fontWhite, theme.font14]}>余额：￥0.00 | 积分：100</Text>
                    </View>
                </View>
                <View style={[theme.row, theme.whiteBlockWithPadding]}>
                    <TouchableOpacity style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter, theme.mt10, theme.mb10]} onPress={() => this._gotoTicketOrder()}>
                        <View style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter]}>
                            <Image style={[styles.topItemImg, theme.mb10]} source={require('../../assets/me/icon-movie-order.png')} />
                            <Text style={[theme.font12, theme.fontBlack]}>影票订单</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter, theme.mt10, theme.mb10]} onPress={() => this._gotoGoodsOrder()}>
                        <View style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter]}>
                            <Image style={[styles.topItemImg, theme.mb10]} source={require('../../assets/me/icon-goods-order.png')} />
                            <Text style={[theme.font12, theme.fontBlack]}>卖品订单</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter, theme.mt10, theme.mb10]} onPress={() => this._gotoComboOrder}>
                        <View style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter]}>
                            <Image style={[styles.topItemImg, theme.mb10]} source={require('../../assets/me/icon-packages-order.png')} />
                            <Text style={[theme.font12, theme.fontBlack]}>套票订单</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    this.state.items.map((item, index) =>
                        (<ItemComponet onPress={() => this._itemClick(item.goToUrl)} source={item.image} key={item.id} title={item.title} marginTop={item.marginTop} borderBottom={item.borderBottom} />))
                }
                <Button buttonStyle={styles.button} text={'退出登陆'} onPress={() => this._navigateToLogin()} />
            </RefreshScrollView>
        </View>)
    }
}

const styles = StyleSheet.create({
    tab_icon: {
        width: 26,
        height: 26,
    },
    top: {
        backgroundColor: theme.colorPrimary,
        height: 160,
        width: '100%',
        alignItems: 'center',
    },
    avatarbox: {
        width: 80,
        height: 80,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.borderColor,
        borderRadius: 40,
    },
    avatarImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    item: {
        minHeight: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemImg: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    rightImg: {
        width: 9,
        height: 17,
    },
    button: {
        margin: theme.pagePadding,
        marginRight: theme.pagePadding,
        backgroundColor: theme.colorPrimary,
        borderRadius: theme.borderRadius,
    },
    topItemImg: {
        height: 23,
        width: 22
    }
});

