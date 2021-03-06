import React, { Component,PropTypes } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
var theme = require('../../../style')
const { width, height } = Dimensions.get('window')


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

    changeSelect(selectItem, index) {
        if (!this.state.tab)
            return
   
        if (this.state.tab.length > 4) {
            if (index >= 2) { 
                // scrollTo({x: 0, y: 0, animated: true})无效，原因未知
                this.refs.srollView.scrollTo(0,80 * (index - 2),true)
            }else{
                  this.refs.srollView.scrollTo(0,0,true)
            }
        }
        this.setState({
            tabSelcted: selectItem
        })
        if (this.props && this.props.changeSelect) {
            this.props.changeSelect(selectItem,index)
        }
    }

    getWidth() {
        if (!this.props.tab || this.props.tab.length == 0)
            return width
        if (this.props.tab.length > 4)
            return 80
        return width / this.props.tab.length
    }



    render() {
        if (this.state && !this.state.tab)
            return null

        return (
            <View style={[styles.tab]}>
                <ScrollView ref='srollView' style={[theme.flex, theme.row, { height: '100%' }]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.props.tab.map(
                        (item, index) => {
                            return (<TouchableOpacity
                                activeOpacity={1}
                                key={index}
                                style={[styles.tabItemBox, { width: this.getWidth() }, this.state.tabSelcted == item ? styles.tabItemBoxSelect : null]}
                                onPress={() => this.changeSelect(item, index)}>
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
        width: '100%',
        height: 45,
        borderColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    tabItemBox: {
        flex: 1,
        width: '100%',
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

Tab.propTypes = {
    tab:PropTypes.array, 
    changeSelect:PropTypes.func
}