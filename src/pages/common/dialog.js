import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import {
    Button
} from '../common/component'
import theme from '../../style'

export default class Dialog extends Component {
    static defaultProps = {
        showCancel: true,
        showConfirm: true,
        onCancelPress: null,
        onConfirmPress: null,
        cancelText: '取消',
        confirmText: '确定',
        msg: '',
        title: ''
    }
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            animationType: 'slide',
            transparent: true,
            showCancel: props.showCancel,
            showConfirm: props.showConfirm,
            onCancelPress: props.onCancelPress,
            onConfirmPress: props.onConfirmPress,
            cancelText: props.cancelText,
            confirmText: props.confirmText,
            msg: props.msg,
            title: props.title
        }
    }
    setProps(props) {
        if (!props)
            props = {}
        this.state.showCancel = props.showCancel || true
        this.state.showConfirm = props.showCancel || true
        this.state.onCancelPress = props.onCancelPress || null
        this.state.onConfirmPress = props.onConfirmPress || null
        this.state.cancelText = props.cancelText || '取消'
        this.state.confirmText = props.confirmText || '确定'
        this.state.msg = props.msg || ''
        this.state.title = props.title || ''
        if (props.showCancel == null || props.showCancel == undefined) {
            this.state.showCancel = true
        }
        if (props.showConfirm == null || props.showConfirm == undefined) {
            this.state.showConfirm = true
        }


    }

    _setAnimationType(type) {
        this.setState({
            animationType: type
        })
    }
    _toggleTransparent() {
        this.setState({ transparent: !this.state.transparent });
    }

    _showDialog(props) {
        console.log(">............props", this.props.title)
        this.setProps(props)
        this.setState({
            ...this.state,
            visible: true,
        })
    }
    _hideDialog() {
        this.setState({
            visible: false,
        })
    }

    _cancelPress() {
        if (this.state.onCancelPress) {
            this.state.onCancelPress()
            return
        }
        this._hideDialog()
    }

    _confirmPress() {
        if (this.state.onConfirmPress) {
            this.state.onConfirmPress()
            return
        }
        if (!this.state._showDialog) {
            this._hideDialog()
        }
    }

    _getButton() {
        if (this.state.showCancel && !this.state.showConfirm) {
            return (<View style={[styles.footer, theme.row]}>
                <Button text={this.state.cancelText} buttonStyle={[theme.flex, styles.cancelButton, styles.confirmButton]} textStyle={[theme.fontBlack]} onPress={() => this._cancelPress()} />
            </View>)
        }
        if (!this.state.showCancel && this.state.showConfirm) {
            return (<View style={[styles.footer, theme.row]}>
                <Button text={this.state.confirmText} buttonStyle={[theme.flex, styles.cancelButton, styles.confirmButton]} onPress={() => this._confirmPress()} textStyle={[theme.fontBlack]}/>
            </View>)
        } 
        if (this.state.showCancel && this.state.showConfirm)
            return (<View style={[styles.footer, theme.row]}>
                <Button text={this.state.cancelText} buttonStyle={[theme.flex, styles.cancelButton,{marginRight:1}]} textStyle={[theme.fontBlack]} onPress={() => this._cancelPress()} />
                <Button text={this.state.confirmText} buttonStyle={[theme.flex, styles.confirmButton]} textStyle={[theme.fontBlack]}  onPress={() => this._confirmPress()} />
            </View>)
        return null
    }

    _getTitle() {
        if (!this.state.title)
            return null
        return (<Text style={[theme.font18, theme.fontBlack, theme.mt15]}>{this.state.title}</Text>)
    }


    render() {
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? '#00000088' : '#f5fcff',
        }
        return (
            <Modal
                onRequestClose={() => { }}
                animationType={this.state.animationType}
                visible={this.state.visible}
                transparent={this.state.transparent}
                style={[theme.alignItemsCenter, theme.justifyContentCenter, theme.flex]}
            >
                <View style={[modalBackgroundStyle, theme.alignItemsCenter, theme.justifyContentCenter, theme.flex]}>
                    <View style={[styles.dialogContainer]}>
                        {this._getTitle()}
                        <View style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter]}>
                            <Text style={[theme.font16]}>{this.state.msg}</Text>
                        </View>
                        {this._getButton()}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    dialogContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginBottom: '10%'
    },
    dialogStyle: {
        width: '80%',
        padding: theme.pagePadding
    },
    footer: {
        width: '100%'
    },
    cancelButton: {
        borderBottomLeftRadius: 5,
        backgroundColor: '#e8e8e8'
    },
    confirmButton: {
        borderBottomRightRadius: 5,
        backgroundColor: '#e8e8e8'
    },
    buttonMarginRight: {
        marginRight: 20
    }
})