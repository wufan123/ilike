import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text, TouchableOpacity, Image,
} from 'react-native';
import BasePullPage from '../../common/basePullPage'
import {Button} from "../../common/component/index";
let theme = require('../../../style')

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cardList: Array(9).fill(1)
        }
    }


    render() {
        return (<BasePullPage style={theme.flex} title={'影城会员卡'} rightImg={<Image style={styles.rightImg} source={require('../../../assets/me/icon_add_card.png')}/>} rightClick={()=>{
            global.navigation.navigate('VipAddCard');
        }}>
            <View>
                {this.getCardItem()}
            </View>
        </BasePullPage>)
    }

    getCardItem() {
        return this.state.cardList.map((item, index) => {
            return (<View style={styles.cardItem} key={index}>
                <View style={styles.cardItemTitle}><Text style={styles.itemTitleTxt}>
                    普卡：3031313
                </Text><View style={{flex:1}}/><TouchableOpacity>
                    <Image style={styles.cardDelIcon} resizeMode={'stretch'} source={require('../../../assets/me/icon_card_del.png')}/>
                </TouchableOpacity></View>
                <View style={styles.cardItemInfo}>
                    <Text style={styles.itemInfoTxt}>卡余额：</Text>
                    <Text style={{color:theme.colorPrimary}}>30元</Text>
                </View>
                <View style={styles.cardItemInfo}><Text style={styles.itemInfoTxt}>
                    有效期:2016-12-31
                </Text></View>
                <View style={styles.cardItemInfo}>
                    <Text style={styles.itemInfoTxt}>
                        开卡影院:中瑞国际影城
                    </Text>
                    <View style={{flex:1}}/>
                    <View style={styles.rechargeButton}>
                        <Text style={styles.rechargeButtonTxt}>充值</Text>
                    </View>
                </View>
            </View>)
        })
    }
}

const styles = StyleSheet.create({
    rightImg:{height:15,width:15},
    rechargeButtonTxt: { color: '#fff' },
    rechargeButton: { width: 48, height: 24, borderRadius: 5, backgroundColor: '#38c44c', justifyContent: 'center', alignItems: 'center' },
    cardDelIcon:{
        height:20,
        width:20
    },
    itemInfoTxt:{
      color:theme.fontColorBlack
    },
    cardItemInfo: {marginTop: 20,flexDirection:'row'},
    itemTitleTxt: {
        fontSize: 15,
        color: theme.fontColorBlack
    },
    cardItemTitle: {
        alignItems:'center',
        flexDirection: 'row',
        paddingBottom: 15,
        borderBottomColor: theme.borderColor,
        borderBottomWidth: 1
    },
    cardItem: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        paddingVertical: 15,
        paddingHorizontal: 15
    }
})