import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
class TopTab extends Component {
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

    getItemStyle(index, selected) {
        var tabItemStyle = [styles.tabItem]
        if (selected)
            tabItemStyle.push(styles.tabItemSelected)
        if (index == 0) {
            tabItemStyle.push(styles.tabItemFirst)
        }
        if (index == this.state.tab.length - 1) {
            tabItemStyle.push(styles.tabItemLast)
        }
        return tabItemStyle
    }

    getItemBoxStyle(index, selected) {
        var tabItemStyle = [styles.tabItemBox]
        if (selected)
            tabItemStyle.push(styles.tabItemBoxSelect)
        if (index == 0) {
            tabItemStyle.push(styles.tabItemFirst)
        }
        if (index == this.state.tab.length - 1) {
            tabItemStyle.push(styles.tabItemLast)
        }
        return tabItemStyle
    }

    render() {
        if (this.state && !this.state.tab)
            return null

        return (
            <View style={styles.tab}>
                {this.props.tab.map(
                    (item, index) => {
                        return (<TouchableOpacity activeOpacity={1} key={index} style={this.getItemBoxStyle(index, item == this.state.tabSelcted)} onPress={() => this.changeSelect(item)}><Text
                            style={this.getItemStyle(index, item == this.state.tabSelcted)}>{item}</Text></TouchableOpacity>)
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        height: 30,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemBox: {
        flex: 1,
        height: 28,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#dc3c38',
    },
    tabItemBoxSelect: {
        backgroundColor: '#ffffff',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#dc3c38',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 14
    },
    tabItemSelected: {
        backgroundColor: '#ffffff',
        color: '#dc3c38',
    },
    tabItemFirst: {
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,
    },
    tabItemLast: {
        borderBottomRightRadius: 2,
        borderTopRightRadius: 2,
    },

});

export default TopTab