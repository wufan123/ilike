import React from 'react';
import BasePage from './basePage'
import globalStyle from '../../style/index'
import {
    View
} from 'react-native';
import {
    Button
} from '../common/component'
import PropTypes from 'prop-types';

export default class BaseBottomButtonPage extends BasePage {
    constructor(props) {
        super(props)
    }

    render() {
        return (<BasePage style={globalStyle.flex} {...this.props}>
            <View style={globalStyle.flex}>
                {this.props.children}
            </View>
            <Button  onPress={this.props.onBottomClick} text={this.props.bottomTxt}/>
        </BasePage>)
    }
}
BaseBottomButtonPage.propTypes = {
    ...BasePage.propTypes,
    onBottomClick:PropTypes.func,
    bottomTxt:PropTypes.string.isRequired
}