import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    Platform,
    TouchableOpacity,
    Switch
} from 'react-native';
import BaseView from '../common/basePage';
import globalStyle from '../../style/index';

MESSAGE_PUSH = "message_push";
CLEAR_CACHE = "clear_cache";
CURRENT_VERSION = "current_version";

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [MESSAGE_PUSH, CLEAR_CACHE, CURRENT_VERSION,],
            messagePushOn: false,
        };
    }

    renderCellLeftComponent = (leftImg, title) => {
        return (
            <View style={[globalStyle.row, globalStyle.alignItemsCenter]}>
                <Image style={{ width: 18, height: 18, resizeMode: 'contain' }} source={leftImg} />
                <Text style={[globalStyle.fontBlack, globalStyle.font18, { marginLeft: 15 }]}>{title}</Text>
            </View>
        )
    }

    renderMessagePushCell = () => {
        return (
            <View style={[globalStyle.row, styles.cell]}>
                {this.renderCellLeftComponent(require('../../assets/me/icon_message_push.png'), '消息推送')}
                <Switch
                    onValueChange={
                        (on) => {
                            this.setState({
                                messagePushOn: on
                            })
                        }
                    }
                    value={this.state.messagePushOn}
                />
            </View>
        )
    }

    renderClearCacheCell = () => {
        return (
            <View style={[globalStyle.row, styles.cell]}>
                {this.renderCellLeftComponent(require('../../assets/me/icon_clear_cache.png'), '清除缓存')}
            </View>
        )
    }

    renderCurrentVersionCell = () => {
        return (
            <View style={[globalStyle.row, styles.cell]}>
                {this.renderCellLeftComponent(require('../../assets/me/icon_current_version.png'), '当前版本')}
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        if (item === MESSAGE_PUSH)
            return this.renderMessagePushCell();
        if (item === CLEAR_CACHE)
            return this.renderClearCacheCell();
        if (item === CURRENT_VERSION)
            return this.renderCurrentVersionCell();
        return null;
    }

    _separator = () => {
        return (
            <View style={globalStyle.lineSeperator} />
        )
    }

    render() {
        return (
            <BaseView title={"设置"}>
                <FlatList
                    data={this.state.items}
                    keyExtractor={(item, index) => (item + '_' + index)}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._separator}
                />
            </BaseView>
        );
    }
}


styles = StyleSheet.create({
    cell: {
        backgroundColor: 'white',
        height: 50,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

