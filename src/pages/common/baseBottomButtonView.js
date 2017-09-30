import React from 'react';
import BaseView from './baseView'
import globalStyle from '../../style/index'
import {
    View
} from 'react-native';
import {
    Button
} from '../common/component'
import PropTypes from 'prop-types';

export default class BaseBottomButtonView extends BaseView {
    constructor(props) {
        super(props)
    }

    render() {
        return (<BaseView style={globalStyle.flex} {...this.props}>
            <View style={globalStyle.flex}>
                {this.props.children}
            </View>
            <Button  onPress={this.props.onBottomClick} text={this.props.bottomTxt}/>
        </BaseView>)
    }
}
BaseBottomButtonView.propTypes = {
    ...BaseView.propTypes,
    onPullRelease:PropTypes.func,
    onBottomClick:PropTypes.func,
    bottomTxt:PropTypes.string.isRequired
}