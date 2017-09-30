import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import Header from '../common/header'
import PropTypes from 'prop-types';
let theme = require('../../style')

export default class BaseView extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<View style={theme.flex}>
            <Header title={this.props.title}  theme={this.props.theme} rightTxt={this.props.rightTxt} rightClick={this.props.rightClick}/>
                {this.props.children}
        </View>)
    }
}
BaseView.propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
    rightTxt:PropTypes.string,
    rightClick:PropTypes.func,
    theme:PropTypes.oneOf(['white','red'])
}
