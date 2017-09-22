import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import {
    ImageButton
} from '../common/component'
import Tab from './tab'

var theme = require('../../style')

class Header extends Component {
    constructor(props) {
        super(props)
    }
    changeSelect(item) {
        if (this.props && this.props.changeSelect) {
            this.props.changeSelect(item)
        }
    }
    backClick() {
        console.log("navigationttttttttttttttt",global.navigation)
        global.navigation.goBack(null);
    }

    render() {
        return (
            <View style={{zIndex: 10}}>
                <StatusBar
                    backgroundColor={theme.colorPrimary}
                />
                <View style={styles.headerContainer} >
                    <View style={styles.backImg}>{!this.props.disableBack ? (<ImageButton style={styles.backImg} source={require('../../assets/common/back.png')} onPress={() => this.backClick()} />) : null}
                    </View>
                    <View style={styles.centerBox}>
                        {this.props.title ? (<Text style={styles.title}>{this.props.title}</Text>) : null}
                        {this.props.tab ? (<Tab tab={this.props.tab} changeSelect={(item) => this.changeSelect(item)}></Tab>) : null}
                    </View>
                    <Text style={styles.cinemaName} numberOfLines={1}>中瑞影城 > </Text>
                </View>  
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                height: 64,
                paddingTop: 20
            },
            android: {
                height: 44
            }
        }),
        backgroundColor: theme.colorPrimary,
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
