import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
var theme = require('../../style')
export default class Tab extends Component {
    constructor(props) {
        super(props)
        if (this.props.tab && this.props.tab.length > 0) {
            this.state = {
                tab: this.props.tab,
                tabSelcted: this.props.tab[0],
            }
        }
    }

    changeSelect(selectItem) {
        this.setState({
            tabSelcted: selectItem
        })
        if (this.props && this.props.changeSelect) {
            this.props.changeSelect(selectItem)
        }
    }



    render() {
        if (this.state && !this.state.tab)
            return null

        return (
            <View style={[styles.tab]}>
                <ScrollView style={[theme.flex, { height: '100%' }]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.props.tab.map(
                        (item, index) => {
                            return (<TouchableOpacity
                                activeOpacity={1}
                                key={index}
                                style={[styles.tabItemBox, this.state.tabSelcted == item ? styles.tabItemBoxSelect : null]}
                                onPress={() => this.changeSelect(item)}>
                                <Text
                                    style={[styles.tabItem, this.state.tabSelcted == item ? styles.tabItemSelected : null]}>{item}</Text></TouchableOpacity>)
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 45,
        borderColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    tabItemBox: { 
        flex: 1, 
        minWidth: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        borderColor: '#ffffff'
    },
    tabItemBoxSelect: {
        borderColor: '#dc3c38',
    },
    tabItem: {
        alignItems: 'center',
        flexDirection: 'row',
        color: theme.fontColorGray,
        justifyContent: 'center',
        textAlign: 'center', 
        fontSize: 14
    },
    tabItemSelected: {
        color: '#dc3c38',
    },


});