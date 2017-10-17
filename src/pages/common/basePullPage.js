import React from 'react';
import BasePage from './basePage'
import globalStyle from '../../style/index'
import { RefreshScrollView } from '../common/pull'
import PropTypes from 'prop-types';

export default class BasePullPage extends BasePage {
    constructor(props) {
        super(props)
    }

    render() {
        return (<BasePage style={globalStyle.flex} {...this.props} ref='mBasePage'>
            <RefreshScrollView
                onPullRelease={this.props.onPullRelease}
                style={{backgroundColor:globalStyle.pageBackground}}
            >
                {this.props.children}
            </RefreshScrollView>
        </BasePage>)
    }
}
BasePullPage.propTypes = {
    ...BasePage.propTypes,
    onPullRelease:PropTypes.func,
}