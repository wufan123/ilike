import React, {Component} from 'react';
import {
    View, StyleSheet, Text, Image, ScrollView, Switch,
} from 'react-native';
import BaseBottomButtonView from '../../common/baseBottomButtonPage'
import RightRadioGroup from "../../common/rightRadio/rightRadioGroup";
import theme from '../../../style/index';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            useAccount: false,
            useScore: false
        }
    }

    render() {
        return (<BaseBottomButtonView style={theme.flex} title={'支付'} bottomTxt={'继续支付'} onBottomClick={()=>{
            global.navigation.navigate('RefundResult');
        }}>
            <ScrollView>
                <View style={styles.payWayBox}>
                    <View style={[styles.payWayItem, {borderTopColor: theme.borderColor, borderTopWidth: 1}]}>
                        <Text style={styles.payWayTitle}>
                            可用300积分抵现:
                        </Text>
                        <Text style={styles.payWayPrice}>
                            ¥30.00
                        </Text>
                        <View style={{flex: 1}}/>
                        <Switch value={this.state.useScore} onValueChange={() => {
                            this.setState((preState) => {
                                preState.useScore = !preState.useScore
                                return preState
                            })
                        }}/>
                    </View>
                </View>
                <View style={[styles.payWayBox, {marginBottom: 16}]}>
                    <View style={{padding: 16, borderBottomColor: theme.borderColor, borderBottomWidth: 1}}>
                        <Text style={styles.choosePayTitle}>请选择支付方式</Text>
                    </View>
                    <RightRadioGroup onSelect={(index)=>{}}
                                     color={theme.colorPrimary}
                                     highlightColor='#fff'
                                     selectedIndex={0}>
                        <View style={styles.payWayItem}>
                            <Image style={styles.payWayIcon} source={require('../../../assets/order/alipay.png')}
                                   resizeMode={'stretch'}/>
                            <View style={{marginLeft: 10}}>
                                <Text style={styles.payWayTitle}>
                                    支付宝
                                </Text>
                                <Text>
                                    推荐持有支付宝账户的用户使用
                                </Text>
                            </View>
                        </View>
                        <View style={styles.payWayItem}>
                            <Image style={styles.payWayIcon} source={require('../../../assets/order/alipay.png')}
                                   resizeMode={'stretch'}/>
                            <View style={{marginLeft: 10}}>
                                <Text style={styles.payWayTitle}>
                                    支付宝
                                </Text>
                                <Text>
                                    推荐持有支付宝账户的用户使用
                                </Text>
                            </View>
                        </View>
                    </RightRadioGroup>
                </View>
            </ScrollView>
        </BaseBottomButtonView>)
    }

}

const styles = StyleSheet.create({
    checkBox: {
        borderRadius: 11,
        backgroundColor: theme.colorPrimary,
        width: 22,
        height: 22,
        borderColor: theme.colorPrimary,
        borderWidth: 1
    },
    choosePayTitle: {
        color: theme.fontColorBlack,
        fontSize: 15
    },
    payWayIcon: {
        height: 37,
        width: 37
    },
    payWayTitle: {
        color: theme.fontColorBlack,
        fontSize: 15
    },
    payWayPrice: {
        color: theme.colorPrimary,
        marginLeft: 5,
        fontSize: 15
    },
    payWayBox: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    payWayItem: {
        flexDirection: 'row',
        padding: 16
    },
    couponItemTxt: {
        fontSize: 13
    },
    couponItem: {
        flexDirection: 'row',
        marginTop: 10
    },
    coupon: {
        backgroundColor: '#fff',
        padding: 16
    },
    amount: {
        backgroundColor: '#fff',
        paddingHorizontal: 16
    },
    item: {
        flexDirection: 'row'
    }
})