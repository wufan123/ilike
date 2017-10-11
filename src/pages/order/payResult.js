import React, {Component} from 'react';
import {
    View,
    StyleSheet, Image, Text,
} from 'react-native';
import BasePullPage from '../common/basePullPage'
import TicketDetail from '../me/ticketDetail'
let theme = require('../../style')
let successBg = '#f9b949'
let successImg = require('../../assets/order/icon_success.png')
export default class extends Component {

    constructor(props) {
        super(props)
        this.ticketDetail = new TicketDetail()
    }

    render() {
        return (<BasePullPage style={theme.flex} title={'详情'}>
            <View>
                <View style={[styles.topInfo,{backgroundColor:successBg}]}>
                    <Image style={styles.topInfoIcon} source={successImg}/>
                    <Text style={styles.topInfoTxt}>支付成功</Text>
                </View>
                {
                    this.ticketDetail .getTicketInfo()
                }
                {
                    this.ticketDetail.getCodeInfo()
                }
                {
                    this.ticketDetail.getAddressInfo()
                }
            </View>

        </BasePullPage>)
    }
}

const styles = StyleSheet.create({
    topInfoIcon:{
      height:69,
        width:69
    },
    topInfoTxt:{
      color:'#fff',
        fontSize:15,
        marginTop:20
    },
    topInfo:{
        height:170,
        justifyContent:'center',
        alignItems:'center'
    }
})