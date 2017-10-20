import React, {Component} from 'react';
import {
    View,
    StyleSheet, Image, TextInput, TouchableOpacity, Text,
    ImageBackground,
} from 'react-native';
import BaseBottomButtonView from '../common/baseBottomButtonPage'
import {RefreshScrollView} from "../common/pull/index";
import * as globalStyle from "../../style/index";
import {
    Button
} from '../common/component'
import {CFlatList} from "../common/component/index";
import { connect } from 'react-redux';

let theme = require('../../style')
let blueBg = require('../../assets/ticket/ticket_bg_blue.png')
let grayBg = require('../../assets/ticket/ticket_bg_gray.png')
let yellowBg = require('../../assets/ticket/ticket_bg_yellow.png')
let greenBg = require('../../assets/ticket/ticket_bg_green.png')
let checkColor = "#999999"
class UseCoupon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            couponList: [{isSelected: false}, {isSelected: false}, {isSelected: false}, {isSelected: false}, {isSelected: false}],
            selectedItem:{}
        }
        this.getItem = this.getItem.bind(this)
    }

    onCardSelect(item,index) {
        this.setState(preState => {
            let newList = preState.couponList.map((item, i) => {
                if (i == index) {
                    item.isSelected = true
                } else {
                    item.isSelected = false
                }
                return item;
            });
            return {
                couponList: newList,
                selectedItem:item
            }
        })
    }

    getItem({item, index}) {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                console.log(index)
               this.onCardSelect(item,index)
            }}>
                <View key={index} style={styles.ticketItem}>
                    <ImageBackground style={styles.ticketBg} source={greenBg}
                                     resizeMode={'stretch'}>
                        <View style={styles.ticketItemTop}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={[styles.itemTopTxt, {marginTop: 15}]}>
                                    ￥
                                </Text>
                                <Text style={[styles.itemTopTxt, {fontSize: 40}]}>
                                    15
                                </Text>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={[styles.itemTopTxt]}>
                                    卖品券
                                </Text>
                                <Text style={[styles.itemTopTxt]}>
                                    SDJDJKLD13
                                </Text>
                            </View>
                            <View style={{flex: 1}}/>
                            <Text style={[styles.itemTopTxt, {fontSize: 11}]}>使用规则</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={styles.ticketBg} source={require('../../assets/ticket/voucher_bg.png')}
                                     resizeMode={'stretch'}>
                        <View style={styles.ticketItemBottom}>
                            <View>
                                <Text style={styles.itemBottomTxt}>
                                    有效日期截止:2016年12月13日
                                </Text>
                                <Text style={styles.itemBottomTxt}>
                                    按券面值抵扣影票金额,特别场次需要补差
                                </Text>
                            </View>
                            <View style={{flex: 1}}/>
                            <View style={styles.itemCheckBox}>
                                {item.isSelected ? <View style={styles.itemCheck}/> : null}
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>)
    }

    bottomClick(){
        const { dispatch} = this.props;
        dispatch({
            type:"useCoupon",
            coupon:this.state.selectedItem
        })
        global.navigation.goBack(null);

    }
    render() {
        return (<BaseBottomButtonView style={theme.flex} rightClick={() => {
            global.navigation.navigate('QrCodeScan');
        }} onBottomClick={() => {
            this.bottomClick()

        }} title={'使用优惠券'} bottomTxt={'确定'} rightImg={(
            <Image
                style={[styles.rightIcon]}
                source={require('../../assets/ticket/scan.png')}/>)}>
            <View style={styles.topAdd}>
                <View style={styles.addTextInputBorder}>
                    <TextInput placeholder={'输入票券编码'} underlineColorAndroid="transparent" style={styles.addTextInput}/>
                </View>
                <Button text={'添加'} buttonStyle={styles.addButton}/>
            </View>
            <RefreshScrollView
                onPullRelease={this.props.onPullRelease}
                style={{backgroundColor: globalStyle.pageBackground}}
            >
                <CFlatList style={theme.flex}
                           data={this.state.couponList}
                           keyExtractor={(item, index) => index}
                           renderItem={
                               this.getItem
                           }
                />
            </RefreshScrollView>
            <View style={styles.lastTip}>
                <Text style={styles.tipTxt}>每周可以领取两次哦</Text>
            </View>
        </BaseBottomButtonView>)
    }
}
export default connect()(UseCoupon);
const styles = StyleSheet.create({
    tipTxt: {
        fontSize: 12
    },
    lastTip: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemCheck: {
        flex: 1,
        backgroundColor: checkColor
    },
    itemCheckBox: {
        borderRadius: 1,
        borderWidth: 1,
        borderColor: checkColor,
        width: 15,
        height: 15,
        marginTop: 6,
        padding: 3
    },
    itemBottomTxt: {
        fontSize: 12
    },
    ticketItemBottom: {alignItems: 'center', flexDirection: 'row', flex: 1, paddingHorizontal: 10},
    itemTopTxt: {
        color: '#fff',
        backgroundColor: 'transparent'
    },
    ticketItemTop: {
        paddingHorizontal: 14,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ticketItem: {
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 3
    },
    ticketBg: {
        width: '100%',
        height: 75
    },
    addButton: {
        width: 77,
        borderRadius: 3,
        marginLeft: 15
    },
    addTextInput: {padding: 0, textAlign: 'center', flex: 1},
    addTextInputBorder: {
        flex: 1,
        borderWidth: 1,
        borderColor: theme.borderColor
    },
    topAdd: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 15,
    },
    rightIcon: {
        height: 20,
        width: 20
    }
})