import {RadioGroup} from 'react-native-flexi-radio-button'
import React from 'react'
import RadioButton from  './cardRadioButton'
import {View} from "react-native";
export default  class CardRadioGroup extends RadioGroup{
    render(){
        var radioButtons = React.Children.map(this.props.children, (radioButton, index) => {
            let isSelected = this.state.selectedIndex == index
            let color = isSelected && this.props.activeColor?this.props.activeColor:this.props.color
            return (
                <RadioButton
                    color={color}
                    activeColor={this.props.activeColor}
                    {...radioButton.props}
                    index={index}
                    isSelected={isSelected}
                >
                    {radioButton.props.children}
                </RadioButton>
            )
        })

        return(
            <View style={this.props.style}>
                {radioButtons}
            </View>
        )
    }
}