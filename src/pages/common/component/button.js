import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
export default class ImageButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressState: false
        }
    }

    render() {

        return (
            <TouchableOpacity
                style={[styles.defaultStyle, this.props.buttonStyle]}
                onPress={this.props.onPress}
                activeOpacity={0.8}
            >
                <Text style={[styles.defaultTextStyle, this.props.textStyle]}>{this.props.text}</Text>
            </TouchableOpacity> 
        );
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        backgroundColor: '#fc9d40',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultTextStyle: {
        color: '#ffffff',
        fontSize: 14
    }
})

ImageButton.propTypes = {
    // buttonStyle:PropTypes.object,
    // textStyle: PropTypes.object,
    text: PropTypes.string,
    onPress: PropTypes.func
}


