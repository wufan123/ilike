import {RadioButton} from 'react-native-flexi-radio-button'
import React from 'react'
import {TouchableWithoutFeedback, View, StyleSheet} from "react-native";
export default class CardRadioButton extends RadioButton {
    getRadioButtonContent(){
        var {children} = this.props
        if(children instanceof  Array)
        {
           return React.Children.map(children, (item,index) => {
                if(index)
                {
                    return item
                }else
                {
                    return (<View style={styles.itemContainer}>
                        {item}
                        <View style={{flex: 1}}/>
                        <View style={[styles.radio, this.getRadioStyle()]}>
                            {this.isSelected()}
                        </View>
                    </View>)
                }
            })
        }else{
            return (
                <View style={styles.itemContainer}>
                    <View style={[styles.radio, this.getRadioStyle()]}>
                        {this.isSelected()}
                    </View>
                    <View>
                        {children}
                    </View>
                </View>
            )
        }

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
    itemContainer:{
      flex:1,
        flexDirection:'row'
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