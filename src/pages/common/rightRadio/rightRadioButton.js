import {RadioButton} from 'react-native-flexi-radio-button'
import React from 'react'
import {TouchableWithoutFeedback, View, StyleSheet} from "react-native";
export default class RightRadioButton extends RadioButton {
    getRadioButtonContent() {
        var {children} = this.props
        return (
            <View style={styles.itemContainer}>
                <View style={{flexDirection:'row'}}>
                    {children}
                </View>
                <View style={{flex:1}}/>
                <View style={[styles.radio, this.getRadioStyle()]}>
                    {this.isSelected()}
                </View>
            </View>
        )

    }

    render() {
        return (
            <View style={{opacity: this.props.disabled ? 0.4 : 1}}>
                <TouchableWithoutFeedback
                    disabled={this.props.disabled}
                    onPress={() => this.context.onSelect(this.props.index, this.props.value)}
                >
                    <View
                        style={[styles.container, this.props.style, this.props.isSelected ? {backgroundColor: this.context.highlightColor} : null]}>
                        {
                            this.getRadioButtonContent()
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
let styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    container: {
        flexGrow: 1,
        padding: 10,
    },
    radio: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})