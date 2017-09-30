import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Dimensions, Platform, StatusBar, TouchableOpacity } from 'react-native';
import {
    ImageButton
} from '../common/component'
import Tab from './topTab'
import globalStyle from '../../style/index'

var theme = require('../../style')

class Header extends Component {
    constructor(props) {
        super(props)
    }
    changeSelect(item) {
        if (this.props && this.props.changeSelect) {
            this.props.changeSelect(item)
        }
    }
    backClick() {
        global.navigation.goBack(null);
    }

    selectCinema() {
        global.navigation.navigate('Cinema');
    }

    _goToForgetPw(){
        global.navigation.navigate('ForgetPw');   
    }

    render() {
        let txtColor = this.props.theme==='white'?globalStyle.colorPrimary:'#fff';
        let bgColor = this.props.theme==='white'?'#fff':theme.colorPrimary;
        return (
            <View style={[{ zIndex: 10 },this.props.style]}>
                <StatusBar backgroundColor={this.props.theme?this.props.theme:theme.colorPrimary}
                barStyle={this.props.theme?'dark-content':theme.colorPrimary}
                />
                <View style={[styles.headerContainer,{backgroundColor:bgColor},this.props.backgroundColor]} >
                    <View style={styles.backImg}>{!this.props.disableBack ? (this.props.theme=='white'? <ImageButton style={styles.backImg} source={require('../../assets/common/back_red.png')} onPress={() => this.backClick()} />: <ImageButton style={styles.backImg} source={require('../../assets/common/back.png')} onPress={() => this.backClick()} />) : null}
                    </View>
                    <View style={styles.centerBox}>
                        {this.props.title ? (<Text style={[styles.title,{color:txtColor},this.props.textColor]}>{this.props.title}</Text>) : null}
                        {this.props.tab ? (<Tab tab={this.props.tab} changeSelect={(item) => this.changeSelect(item)}></Tab>) : null}
                    </View>
                    <View style={styles.rightBox}>
                        {this.props.showCinema ? (<TouchableOpacity onPress={this.selectCinema} style={theme.flex}><Text style={styles.cinemaName} numberOfLines={1}>中瑞影城 > </Text></TouchableOpacity>) : null}
                        {this.props.RText ? (<TouchableOpacity onPress={this._goToForgetPw} ><Text style={this.props.textColor} numberOfLines={1}>{this.props.RText}</Text></TouchableOpacity>) : null}
                        {this.props.rightTxt? <TouchableOpacity onPress={this.props.rightClick} style={theme.flex}><Text  style={[styles.cinemaName,{color:txtColor}]} numberOfLines={1}>{this.props.rightTxt }</Text><Image style={{display:this.props.rightImg?'flex':'none'}} source={{uri:this.props.rightImg}}/></TouchableOpacity>:null}
                    </View>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                height: 64,
                paddingTop: 20
            },
            android: {
                height: 44
            }
        }),
        backgroundColor: theme.colorPrimary,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        position: 'relative'
    },
    whiteContainer: {
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                height: 64,
                paddingTop: 20
            },
            android: {
                height: 44
            }
        }),
        backgroundColor: '#ffffff',
        color:theme.colorPrimary,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        position: 'relative'
    },
    backImg: {
        width: 20,
        height: 20
    },
    centerBox: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 100,
        alignItems: 'center',
        marginRight: 20
    },
    title: {
        flex: 1,
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
    },
    rightBox: {
        width: 100,
        height:'100%',
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'center'
    },
    cinemaName: {
        color: '#ffffff',
        textAlign: 'right',
        width: 100,
    },
});

export default Header
