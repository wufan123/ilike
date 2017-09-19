import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
class ImageButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressState: false
        }
    }

    _onPressIn() {
        console.log("tttttt  in ")
        this.setState({
            pressState: true
        })
    }

    _onPressOut() {
        console.log("out llllllllll in ")
        this.setState({
            pressState: false
        })
    }
    render() {

        return (
            <TouchableWithoutFeedback
                disabled={false}
                onPress={this.props.onPress}
                onPressIn={() => this._onPressIn()}
                onPressOut={() => this._onPressOut()}>
                <Image style={this.props.style} source={this.state.pressState && this.props.activeSource ? this.props.activeSource : this.props.source} />
            </TouchableWithoutFeedback>
        );
    }
}


export default ImageButton