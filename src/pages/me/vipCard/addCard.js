import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text, Image,
} from 'react-native';
import BasePage from '../../common/basePage'
let theme = require('../../../style')

export default class extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<BasePage style={theme.flex} title={'绑定会员卡'}>
            <View>
                <View style={styles.item}>
                    <Text style={{color:theme.colorPrimary}}>
                        请先选择会员卡归属影城
                    </Text>
                    <View style={{flex:1}} />
                    <Image rightIcon={styles.rightIcon} resizeMode={'stretch'} source={require('../../../assets/common/right_btn.png')}/>
                </View>
            </View>
        </BasePage>)
    }
}

const styles = StyleSheet.create({
        rightIcon:{
            width:5
        },
        item:{
            backgroundColor:'#fff',
            paddingHorizontal:15,
            paddingVertical:18,
            flexDirection:'row'
        }
})
