import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    Share
} from 'react-native';
import RefreshScrollView from '../common/pull/RefreshScrollView';
import globalStyle from '../../style/index';
import BaseView from '../common/baseView'

class CommentReplyListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {},
            replyList: ['1','2','3'],
        };
    }

    renderSeparator = () => {
        return(
            <View style={globalStyle.lineSeperator} />
        );
    }

    renderComment = (comment) => {
        return(
            <View
                style={[styles.commentItem]}
            >
                <View style={styles.commentItemUpContainer}>
                    <View style={[globalStyle.row, {alignItems:'center'}]}>
                        <Image style={styles.avatar} source={require('../../assets/common/default_avatar.png')} />
                        <View style={{'width':6}} />
                        <Text style={[globalStyle.fontGray, globalStyle.font14]}>zmax</Text>
                        <View style={{'width':6}} />
                        <Image style={styles.genderImg} source={require('../../assets/common/girl.png')} />
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.deleteImg} source={require('../../assets/me/close.png')} />
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.commentItemMiddleContainer}
                >
                    <Text
                        numberOfLines={3}
                        style={[globalStyle.fontBlack, globalStyle.font14]}
                    >
                        hello
                    </Text>
                </View>
                <View
                    style={styles.commentItemBottomContainer}
                >
                    <Text style={[globalStyle.fontGray, globalStyle.font11]}>30min ago</Text>
                    <View style={globalStyle.row}>
                    <Image
                        style={{width: 18, height: 16}}
                        source={require('../../assets/common/movie_comments.png')}
                        resizeMode={"cover"}
                    />
                    <View style={{width:6}} />
                    <Text style={[globalStyle.fontGray, globalStyle.font12]} >20</Text>
                    </View>
                </View>
            </View>
        );
    };

    renderReplyComment = () => {
        let paddingLeft = 38+15;
        return(
            <View style={{paddingLeft: paddingLeft, paddingTop: 15, paddingBottom: 17, paddingRight: 15, backgroundColor: 'white'}}>
                <TouchableOpacity
                    onPress={()=>{
                        global.navigation.navigate('WriteComment', {
                            title: '回复',
                            commentPlaceholder: '回复：138****4573'
                        });
                    }}
                >
                    {this.renderComment()}
                </TouchableOpacity>
                <View style={[{position: 'absolute', bottom: 0, left: paddingLeft, right: 0}]}>
                    {this.renderSeparator()}
                </View>
            </View>
        )
    }

    renderReplyList = () => {
        return(
            <FlatList 
                data={this.state.replyList}
                renderItem={this.renderReplyComment}
                keyExtractor={(item, index)=>(''+index)}
            />
        );
    }

    render() {
        return (
            <BaseView title={"回复"}>
                <RefreshScrollView>
                    <View style={{paddingTop: 15, paddingHorizontal: 15, paddingBottom: 17, backgroundColor: 'white'}}>
                        {this.renderComment()}
                    </View>
                    {this.renderSeparator()}
                    {this.renderReplyList()}
                </RefreshScrollView>
                <TouchableOpacity
                    style={[globalStyle.buttonOrange, {height: 48}]}>
                    <Text style={globalStyle.fontWhite}>回复</Text>
                </TouchableOpacity>
            </BaseView>
        );
    }
}

const styles = StyleSheet.create({
    commentItem: {
        backgroundColor: 'white',
    },
    commentItemUpContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    genderImg: {
        width: 14,
        height: 14,
        resizeMode: 'cover'
    },
    deleteImg: {
        width: 14,
        height: 14,
    },
    commentItemMiddleContainer: {
        marginTop: 8,
        marginLeft: 38,
    },
    commentItemBottomContainer: {
        marginLeft: 38,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    }

})

module.exports = CommentReplyListScreen;