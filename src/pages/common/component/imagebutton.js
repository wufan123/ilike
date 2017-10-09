import React, { Component,PropTypes } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
export default class ImageButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressState: false
        }
    }

    _onPressIn() {
        this.setState({
            pressState: true
        })
    }

    _onPressOut() {
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

 
 

ImageButton.propTypes = {
    onPress: PropTypes.func, 
    // activeSource: PropTypes.object,
    // source: PropTypes.object
}