import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation'
import pageUtil from '../utils/pageUtil'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // 处理数据源
        global.navigation = this.props.navigation;
        setTimeout(() => {
            if (this.props.curCinema)
                pageUtil.resetTo('MainPage')
            else
                pageUtil.resetTo('Cinema')
        }, 1000)

    }

    render() {
        return (
            <Button title="click"
                onPress={
                    () => pageUtil.resetTo('MainPage')
                }
            />
        );
    }
}

const mapStateToProps = store => ({
    curCinema: store.cinema.currentCinema
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)