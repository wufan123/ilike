import React from 'react';
import BaseView from './baseView'
import globalStyle from '../../style/index'
import { RefreshScrollView } from '../common/pull'
import PropTypes from 'prop-types';

export default class BasePullView extends BaseView {
    constructor(props) {
        super(props)
    }

    render() {
        return (<BaseView style={globalStyle.flex} {...this.props}>
            <RefreshScrollView
                onPullRelease={this.props.onPullRelease}
                style={{backgroundColor:globalStyle.pageBackground}}
            >
                {this.props.children}
            </RefreshScrollView>
        </BaseView>)
    }
}
BasePullView.propTypes = {
    ...BaseView.propTypes,
    onPullRelease:PropTypes.func,
}