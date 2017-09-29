import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import globalStyle from '../../style/index';
import Header from '../common/header'

class WriteCommentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentContent: '',
            maxLength: 300
        };
    }

    onChangeCallback = (event) => {
        this.setState({
            commentContent: event.nativeEvent.text,
        });
    }

    render() {
        return(
            <View style={{backgroundColor:globalStyle.pageBackground}}>
                <StatusBar
                    hidden={false}
                />
                <Header
                    title={'写短评'}
                    backImg={require('../../assets/common/back.png')}
                />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        editable = {true}
                        maxLength = {this.state.maxLength}
                        multiline = {true}
                        onChange = {this.onChangeCallback}
                        placeholder = {'我是剧透，我想说～～'}
                    />
                    <Text style={styles.countNum}>{''+this.state.commentContent.length+'/'+this.state.maxLength}</Text>
                </View>
                <TouchableOpacity
                    style={[globalStyle.buttonOrange]}
                >
                    <Text style={globalStyle.fontWhite}>提交</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputContainer: {
        padding: 15,
        backgroundColor: 'white'
    },
    textInput: {
        height: 300,
        paddingBottom: 10,
        fontSize: 16
    },
    countNum: {
        position: 'absolute',
        right: 10,
        bottom: 10
    }
});

module.exports = WriteCommentScreen;