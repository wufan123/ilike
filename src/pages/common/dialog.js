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
            transparent: true
        }
    }
    setNativeProps(props) {
        if (!props)
            props = {}
        this.props.showCancel = props.showCancel || true
        this.props.showConfirm = props.showCancel || true
        this.props.onCancelPress = props.onCancelPress || null
        this.props.onConfirmPress = props.onConfirmPress || null
        this.props.cancelText = props.cancelText || '取消'
        this.props.confirmText = props.confirmText || '确定'
        this.props.msg = props.msg || ''
        this.props.title = props.title || ''
        if (props.showCancel == null || props.showCancel == undefined) {
            this.props.showCancel = true
        }
        if (props.showConfirm == null || props.showConfirm == undefined) {
            this.props.showConfirm = true
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

    _showDialog() {
        this.setState({
            visible: true,
        })
    }
    _hideDialog() {
        this.setState({
            visible: false,
        })
    }

    _cancelPress() {
        if (this.props.onCancelPress) {
            this.props.onCancelPress()
            return
        }
        this._hideDialog()
    }

    _confirmPress() {
        if (this.props.onConfirmPress) {
            this.props.onConfirmPress()
            return
        }
        if (!this.props._showDialog) {
            this._hideDialog()
        }
    }

    _getButton() {
        if (this.props.showCancel && !this.props.showConfirm) {
            return (<View style={[styles.footer, theme.row]}>
                <Button text={this.props.cancelText} buttonStyle={[theme.flex, styles.cancelButton, styles.confirmButton]} onPress={() => this._cancelPress()} />
            </View>)
        }
        if (!this.props.showCancel && this.props.showConfirm) {
            return (<View style={[styles.footer, theme.row]}>
                <Button text={this.props.confirmText} buttonStyle={[theme.flex, styles.cancelButton, styles.confirmButton]} onPress={() => this._confirmPress()} />
            </View>)
        }
        if (this.props.showCancel && this.props.showConfirm)
            return (<View style={[styles.footer, theme.row]}>
                <Button text={this.props.cancelText} buttonStyle={[theme.flex, styles.cancelButton]} onPress={() => this._cancelPress()} />
                <Button text={this.props.confirmText} buttonStyle={[theme.flex, styles.confirmButton]} onPress={() => this._confirmPress()} />
            </View>)
        return null
    }

    _getTitle() {
        if (!this.props.title)
            return null
        return (<Text style={[theme.font18, theme.fontBlack]}>{this.props.title}</Text>)
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
                        <Text style={theme.flex}>{this.props.msg}</Text>
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
        minHeight: 150,
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
    },
    confirmButton: {
        borderBottomRightRadius: 5
    },
    buttonMarginRight: {
        marginRight: 20
    }
})