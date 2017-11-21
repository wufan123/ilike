import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Button } from '../common/component'
import Header from '../common/header';
import globalStyle from '../../style/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions'
import { goBack } from '../../utils/pageUtil'



const { screenWidth, screenHeight } = Dimensions.get('window')

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState: true,
            phoneNum: '15396005445',
            password: '123456'
        }
    }

    componentWillReceiveProps(props) {

    }

    _tabChange(pramas) {
        this.setState({
            tabState: pramas
        })
    }

    _goToRegister() {
        global.navigation.navigate('Register');
    }

    _login() {
        if (!this.state.phoneNum) {
            return
        }
        if (!this.state.password) {
            return
        }
        this.props.login(this.state.phoneNum, this.state.password)
    }

    _accountView() {
        return (
            <View style={{ width: '100%' }}>
                <View style={{ marginLeft: globalStyle.pagePadding, marginRight: globalStyle.pagePadding }}>
                    <View style={styles.inputView}>
                        <Image source={require('../../assets/login/phone.png')} style={styles.inputIcon} resizeMode='contain' />
                        <TextInput underlineColorAndroid="transparent"
                            keyboardType='numeric'
                            placeholder='请输入手机号'
                            style={[styles.inputStyle]}
                            onChangeText={(text) => this.setState({ phoneNum: text })}
                            value={this.state.phoneNum} >
                        </TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <Image source={require('../../assets/login/lock.png')} style={styles.inputIcon} resizeMode='contain' />
                        <TextInput underlineColorAndroid="transparent"
                            placeholder='请输入密码'
                            style={styles.inputStyle}
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}>
                        </TextInput>
                    </View>
                    <Button buttonStyle={{ height: 40, backgroundColor: globalStyle.colorPrimary }} text={'登录'} onPress={() => this._login()} />
                    <TouchableOpacity onPress={() => this._goToRegister()} style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ color: globalStyle.colorPrimary }}>没有账号？立即点击此注册> </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    _codeView() {
        return (
            <View style={{ width: '100%' }}>
                <View style={{ marginLeft: globalStyle.pagePadding, marginRight: globalStyle.pagePadding }}>
                    <View style={styles.inputView}>
                        <Image source={require('../../assets/login/phone.png')} style={styles.inputIcon} resizeMode='contain' />
                        <TextInput underlineColorAndroid="transparent" keyboardType='numeric' placeholder='请输入手机号' style={styles.inputStyle} >
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[{ justifyContent: 'space-between', flex: 1, marginRight: 10 }, styles.inputView]}>
                            <Image source={require('../../assets/login/link.png')} style={styles.inputIcon} resizeMode='contain' />
                            <TextInput underlineColorAndroid="transparent" placeholder='请输入验证码' style={styles.inputStyle}  >
                            </TextInput>
                        </View>
                        <Button text={'获取验证码'} buttonStyle={{ backgroundColor: globalStyle.colorPrimary, width: 100 }}></Button>
                    </View>
                    <Button buttonStyle={{ height: 40, backgroundColor: globalStyle.colorPrimary }} text={'验证并登录'} />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Header title={'登录'} bgColor={{ backgroundColor: '#ffffff' }} textColor={{ color: globalStyle.colorPrimary }} theme={'white'} RText={'忘记密码'} ></Header>
                <View style={[styles.login]}>
                    <Image source={require('../../assets/logo.png')} style={{ width: 60 }} resizeMode='contain' />
                    <View style={styles.title}>
                        <TouchableOpacity onPress={() => this._tabChange(true)} style={[styles.tab, styles.firstTab]} >
                            <Text style={[this.state.tabState ? styles.titleActive : '', { textAlign: 'center' }]}>账号登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._tabChange(false)} style={[styles.tab]}>
                            <Text style={[!this.state.tabState ? styles.titleActive : '', { textAlign: 'center' }]}>验证码登录</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.tabState ? this._accountView() : this._codeView()}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: globalStyle.itemMargin,
        backgroundColor: '#ffffff'
    },
    title: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'space-around',
        marginBottom: 30
    },
    titleActive: {
        color: globalStyle.colorPrimary
    },
    firstTab: {
        borderRightWidth: 1,
        borderColor: '#aaaaaa'
    },
    tab: {
        flex: 1
    },
    inputView: {
        position: 'relative',
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: globalStyle.itemMargin
    },
    inputIcon: {
        height: 15,
        marginRight: 10,
        top: 12,
        position: 'absolute'
    },
    inputStyle: {
        flex: 1,
        height: 38,
        paddingLeft: 35
    }
})

const mapStateToProps = state => {
    if (state.auth.isAuthenticated && state.auth.user) {
        goBack(null)
    }
    return ({
        isAuthenticated: state.auth.isAuthenticated,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            login,
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);