import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text, Image, TouchableOpacity, TextInput,
} from 'react-native';
import BasePage from '../../common/basePage'
import {Button} from "../../common/component/index";
let theme = require('../../../style')

export default class extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<BasePage style={theme.flex} title={'绑定会员卡'}>
            <View>
                <TouchableOpacity onPress={()=>{
                    global.navigation.navigate('Cinema');
                }}>
                    <View style={styles.item}>
                            <Text style={{color: theme.colorPrimary}}>
                                请先选择会员卡归属影城
                            </Text>
                            <View style={{flex: 1}}/>
                            <Image style={styles.rightIcon} resizeMode={'stretch'}
                                   source={require('../../../assets/common/right_btn.png')}/>
                    </View>
                </TouchableOpacity>
                <View style={[styles.item,{borderBottomColor:theme.borderColor,borderBottomWidth:1,marginTop:10,paddingVertical:0}]}>
                    <TextInput style={styles.input} placeholder={'请输入会员卡号'} underlineColorAndroid="transparent"/>
                </View>
                <View style={[styles.item,{paddingVertical:0}]}>
                    <TextInput style={styles.input} placeholder={'请输入密码'} underlineColorAndroid="transparent"/>
                </View>
                <View style={{marginTop:40,paddingHorizontal:15}}>
                    <Button text={'确定'}/>
                </View>
            </View>
        </BasePage>)
    }
}

const styles = StyleSheet.create({

    input:{
      flex:1
    },
    rightIcon: {
        width: 7,
        height: 13
    },
    item: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 18,
        flexDirection:'row',alignItems:'center'
    }
})
