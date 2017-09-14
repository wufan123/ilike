import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import Tab from './tab'
class Header extends Component {
    constructor(props) {
        super(props)
    }
    changeSelect(item) {
        if (this.props&&this.props.changeSelect) {
            this.props.changeSelect(selectItem)
        }
    }
    render() {

        return (
            <View style={styles.headerContainer} >
                <Image style={styles.backImg} source={require('../../images/common/back.png')}></Image>
                <View style={styles.centerBox}>
                    {this.props.title ? (<Text style={styles.title}>{this.props.title}</Text>) : null}

                    <Tab tab={this.props.tab} changeSelect={this.changeSelect}></Tab>
                </View>
                <Text style={styles.cinemaName} numberOfLines={1}>中瑞影城 > </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#dc3c38',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        position: 'relative'
    },
    backImg: {
        width: 20,
        height: 20
    },
    centerBox: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 100,
        alignItems: 'center',
        marginRight: 20
    },
    title: {
        flex: 1,
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
    },
    cinemaName: {
        color: '#ffffff',
        textAlign: 'right',
        width: 100,
    },

});

export default Header