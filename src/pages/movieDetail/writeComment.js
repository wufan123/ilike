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
import Header from '../common/header';
import BaseView from '../common/baseView';

class WriteCommentScreen extends Component {

    static defaultProps = {
        ...Component.defaultProps,
        commentPlaceholder: '我是剧透，我想说～～',
        title: '写短评'
    }

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
        let navigation = this.props.navigation;
        let title = this.props.title;
        let commentPlaceholder = this.props.commentPlaceholder;
        if (params = navigation.state.params) {
            if (params.title)
                title = params.title;
            if (params.commentPlaceholder)
                commentPlaceholder = params.commentPlaceholder;
        }
        return (
            <BaseView title={title}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        editable={true}
                        maxLength={this.state.maxLength}
                        multiline={true}
                        onChange={this.onChangeCallback}
                        placeholder={commentPlaceholder}
                    />
                    <Text style={styles.countNum}>{'' + this.state.commentContent.length + '/' + this.state.maxLength}</Text>
                </View>
                <TouchableOpacity
                    style={[globalStyle.buttonOrange, { height: 48 }]}
                >
                    <Text style={globalStyle.fontWhite}>提交</Text>
                </TouchableOpacity>
            </BaseView>
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