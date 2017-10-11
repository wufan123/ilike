import React, {Component} from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import Header from '../common/header'
import PropTypes from 'prop-types';
let theme = require('../../style')

export default class BasePage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
        <View style={theme.flex}>
            <StatusBar
                hidden={false}
                barStyle={'light-content'}
            />
            <Header title={this.props.title}  theme={this.props.theme} rightTxt={this.props.rightTxt} rightClick={this.props.rightClick} rightImg={this.props.rightImg}/>
                {this.props.children}
        </View>)
    }
}
BasePage.propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
    rightTxt:PropTypes.string,
    rightClick:PropTypes.func,
    rightImg:PropTypes.object,
    theme:PropTypes.oneOf(['white','red'])
}
