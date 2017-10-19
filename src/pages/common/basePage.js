import React, {Component} from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import Header from '../common/header'
import Dialog from '../common/dialog'
import PropTypes from 'prop-types';
let theme = require('../../style')

export default class BasePage extends Component {


    constructor(props) {
        super(props)
        this.showDialog = this.showDialog.bind(this)
    }

    showDialog(props) {
        console.log(this.refs.mDialog)
        this.refs.mDialog.setNativeProps(props)
        this.refs.mDialog._showDialog()
    }

    hideDialog() {
        this.dialog.hideDialog()
    }



    render() {
        return (
            <View style={[theme.flex, {position: 'relative'}]}>
                <StatusBar
                    hidden={false}
                    barStyle={'light-content'}
                />
                <Header showCinema={this.props.showCinema} tab={this.props.tab} changeSelect={this.props.changeSelect}
                        disableBack={this.props.disableBack} title={this.props.title} theme={this.props.theme}
                        rightTxt={this.props.rightTxt} rightClick={this.props.rightClick}
                        rightImg={this.props.rightImg}/>
                {this.props.children}
                <Dialog ref='mDialog' ></Dialog>
                
            </View>)
    }
}
BasePage.propTypes = {
    ...View.propTypes,
    title: PropTypes.string,
    rightTxt: PropTypes.string,
    rightClick: PropTypes.func,
    rightImg: PropTypes.object,
    theme: PropTypes.oneOf(['white', 'red'])
}
