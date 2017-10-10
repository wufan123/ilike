import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text, Image, Switch, TextInput, TouchableOpacity
} from 'react-native';
import BaseBottomButtonView from '../common/baseBottomButtonPage'
import {RadioGroup} from '../common/cardRadio'
let theme = require('../../style')

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            useCard:false
        }
        this.useCardChange =this.useCardChange.bind(this)
    }
    getOrderItem(items) {
        return items.map(item=>{
            return (<View key={item} style={styles.orderItem}>
                <Text style={styles.orderItemTitle}>爆米花</Text>
                <View style={{flex:1}}/>
                <Text style={{minWidth:40}}>x 9</Text>
                <Text>￥100</Text>
            </View>)
        })
    }
    useCardChange(value){
        this.setState({useCard:value})
    }
    render() {
        return (<BaseBottomButtonView style={theme.flex} title={'确认订单'} bottomTxt={'确定'} onBottomClick={()=>{
            global.navigation.navigate('PayDetail');
        }}>
            <ScrollView>
                <View>
                    <View style={styles.tipInfo}>
                        <Text>
                            请在
                        </Text>
                        <Text style={{color: '#ff5353'}}>
                            14:30
                        </Text>
                        <Text>
                            内完成支付,慢了就没有座位了哦
                        </Text>
                    </View>
                    <View style={styles.cinemaInfo}>
                        <View >
                            <View style={styles.cinemaInfoItem}>
                                <Text style={styles.infoTitle}>九层妖塔</Text>
                                <View style={{flex:1}}/>
                                <View style={[styles.cinemaTag,{backgroundColor: '#fc9d40'}]}>
                                    <Text style={styles.cinemaTagTxt}>3d</Text>
                                </View>
                            </View>
                            <View style={styles.cinemaInfoItem}>
                                <Text>场次: </Text>
                                <Text>今天06-30 13:00</Text>
                            </View>
                            <View style={styles.cinemaInfoItem}>
                                <Text>座位: </Text>
                                <Text>5排6座 5排6座 5排6座</Text>
                            </View>
                            <View style={styles.cinemaInfoItem}>
                                <Text>影院: </Text>
                                <Text>红星没改龙</Text>
                            </View>
                            <View style={styles.cinemaInfoItem}>
                                <Text>价格：</Text>
                                <Text>黄金座30.00*1+黄金座31.00*1</Text>
                            </View>
                        </View>
                        <View >
                            <Image source={require('../../assets/order/dash_line_r.png')} resizeMode="contain" style={styles.dashLine}/>
                            <View>
                                {this.getOrderItem([1,2,3,4])}
                            </View>
                        </View>
                        <View >
                            <Image source={require('../../assets/order/dash_line_r.png')} resizeMode="contain" style={styles.dashLine}/>
                            <View style={styles.orderItem}>
                                <Text style={styles.orderItemTitle}>影票总额</Text>
                                <View style={styles.orderItemTip}>
                                    <Text style={styles.orderItemTipTxt}>会员折扣</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Text>￥100</Text>
                            </View>
                            <View style={styles.orderItem}>
                                <Text style={styles.orderItemTitle}>卖品总额</Text>
                                <View style={{flex:1}}/>
                                <Text>￥100</Text>
                            </View>
                            <View style={styles.orderItem}>
                                <Text style={styles.infoTitle}>订单总额</Text>
                                <View style={{flex:1}}/>
                                <Text style={styles.orderTotalPrice}>￥125</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.cinemaInfo,{marginTop:12}]}>
                        <TouchableOpacity onPress={()=>{
                            global.navigation.navigate('UseTicket');
                        }}>
                            <View style={styles.ticketItem}>
                                <Image source={require('../../assets/order/check_movie.png')} style={styles.ticketItemIcon} />
                                <Text style={styles.infoTitle}>电影优惠券</Text>
                                <View style={{flex:1}}/>
                                <Text>0张可用 ></Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{
                            global.navigation.navigate('UseTicket');
                        }}>
                            <View style={[styles.ticketItem,{marginTop:10}]}>
                                <Image source={require('../../assets/order/check_sale.png')} style={styles.ticketItemIcon} />
                                <Text style={styles.infoTitle}>卖品优惠券</Text>
                                <View style={{flex:1}}/>
                                <Text>0张可用 ></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.cinemaInfo,{marginTop:12}]}>
                        <View style={styles.singleItem}>
                            <Text style={styles.infoTitle}>使用会员卡支付影票金额</Text>
                            <View style={{flex:1}}/>
                            <Switch value={this.state.useCard} onValueChange={this.useCardChange}/>
                        </View>
                    </View>
                    <View style={{display:this.state.useCard?'flex':'none'}}>
                        <RadioGroup
                            onSelect = {this.onCardSelect}
                            color={theme.colorPrimary}
                            highlightColor='#fff'
                            selectedIndex={0}
                        >
                        {this.getCardItem([1,2,3,4])}
                        </RadioGroup>
                        <View style={styles.cardBottomAdd}>
                            <Text style={styles.bottomAddTxt}>
                                +添加会员卡
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.cinemaInfo,{marginVertical:12}]}>
                        <View style={styles.singleItem}>
                            <Text style={[styles.infoTitle,{marginRight:70}]}>手机号</Text>
                            <TextInput style={{flex:1}} placeholder={'用于接受取票码'}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </BaseBottomButtonView>)
    }

    onCardSelect(index, value) {

    }

    getCardItem(items) {
        return items.map(item=>{
            return (
            <View key={item} style={styles.cardBlock}>
                <View style={styles.cardItem}>
                    <Text style={styles.infoTitle}>
                        ZMAX:30310287
                    </Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View>
                        <View style={[styles.cardItem,{marginTop:10}]}>
                            <Text>
                                当前卡余额
                            </Text>
                            <Text style={styles.cardItemPrice}>
                                ￥100.00
                            </Text>
                        </View>
                        <View style={[styles.cardItem,{marginTop:10}]}>
                            <Text>
                                该卡需支付影票金额
                            </Text>
                            <Text style={styles.cardItemPrice}>
                                ￥50.00
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}/>
                    <View style={styles.rechargeButton}>
                        <Text style={styles.rechargeButtonTxt}>充值</Text>
                    </View>
                </View>
            </View>)
        })
    }
}

const styles = StyleSheet.create({
    bottomAddTxt:{color:theme.colorPrimary,fontSize:15},
    cardBottomAdd:{justifyContent:'center',alignItems:'center',backgroundColor:'#fff',height:44,marginTop:12},
    rechargeButtonTxt:{color:'#fff'},
    rechargeButton:{width:48,height:24,borderRadius:5,backgroundColor:'#38c44c',justifyContent:'center',alignItems:'center'},
    cardItemPrice:{color:theme.colorPrimary},
    cardBlock:{backgroundColor:'#fff',marginTop:16,marginHorizontal:16,padding:16,borderRadius:5,borderWidth:0.5,borderColor:theme.borderColor},
    cardItem:{flexDirection:'row'},
    singleItem:{flexDirection:'row',alignItems:'center',height:40},
    ticketItemIcon:{
        height:20,
        width:20,
        marginRight:5
    },
    ticketItem:{
        flexDirection:'row',
    },
    orderTotalPrice:{
        color:theme.colorPrimary,
        fontSize:15
    },
    orderItemTipTxt:{
        color:theme.colorPrimary,
        fontSize:10
    },
    orderItemTip:{
        borderColor:theme.colorPrimary,
        borderRadius:3,
        borderWidth:0.5,
        justifyContent:'center',
        marginLeft:10,
        paddingHorizontal:5
    },
    tipInfo: {
        backgroundColor: "#fff9c4",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cinemaInfo: {
        backgroundColor: "#fff",
        padding:theme.pagePadding
    },
    cinemaInfoItem: {flexDirection: 'row', marginTop: 10,alignItems:'center'},
    infoTitle: {
        fontSize: 15,
        color: theme.fontColorBlack
    },
    cinemaTagTxt: {
        fontSize: 10,
        color: '#fff',
    },
    cinemaTag: {
        width: 41,
        height: 17,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5
    },
    orderItem:{
        flexDirection:'row',
        marginTop:12
    },
    dashLine:{marginTop:15,width:'100%'},
    orderItemTitle:{
        fontSize:13,
        color:theme.fontColorBlack
    }
})