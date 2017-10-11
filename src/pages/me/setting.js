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
    Switch,
    Alert,
    AsyncStorage
} from 'react-native';
import BaseView from '../common/basePage';
import globalStyle from '../../style/index';

MESSAGE_PUSH = "message_push";
CLEAR_CACHE = "clear_cache";
CURRENT_VERSION = "current_version";

PUSH_STATE = 'pushState';

class SettingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [MESSAGE_PUSH, CLEAR_CACHE, CURRENT_VERSION,],
            messagePushOn: true
        };
    }

    componentDidMount() {
        this.getPushState()
        .then(ret=>{
            this.setState({
                messagePushOn: ret
            })
        })
    }

    getPushState = async ()=>{
        try {
            var pushState = await global.storage.getItem(PUSH_STATE);
            if (pushState !== null) {
                pushState = pushState === 'on'?true:false;
                return pushState;
            }
            else {
                await global.storage.setItem(PUSH_STATE, 'on');
                return true;
            }
        } catch (error) {
            console.log('error', error);
            await global.storage.setItem(PUSH_STATE, 'on');
            return true;
        }
    }

    setPushState = async (on) => {
        try {
            await global.storage.setItem(PUSH_STATE, on?'on':'off');
        } catch (error) {
            
        }
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
                                this.setPushState(on);
                                this.setState({
                                    messagePushOn: on
                                });
                        }
                    }
                    value={this.state.messagePushOn}
                />
            </View>
        )
    }

    clearCacheAlert = () => {
        Alert.alert(
            '温馨提示',
            '缓存可以方便您浏览，确认要清空吗？',
            [
                {text: '取消', onPress: ()=>{}, style: 'cancel'},
                {text: '确定', onPress: ()=>{}},
            ]
        );
    }

    renderClearCacheCell = () => {
        return (
            <TouchableOpacity
                style={[globalStyle.row, styles.cell]}
                onPress={this.clearCacheAlert}
            >
                {this.renderCellLeftComponent(require('../../assets/me/icon_clear_cache.png'), '清除缓存')}
                <Image style={{width: 7, height: 13}} source={require('../../assets/common/right_btn.png')} />
            </TouchableOpacity>
        )
    }

    renderCurrentVersionCell = () => {
        return (
            <View style={[globalStyle.row, styles.cell]}>
                {this.renderCellLeftComponent(require('../../assets/me/icon_current_version.png'), '当前版本')}
                <Text style={[globalStyle.font18, globalStyle.fontGray]} >3.6.1</Text>
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
                    extraData={this.state}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._separator}
                />
            </BaseView>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        backgroundColor: 'white',
        height: 50,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

module.exports = SettingScreen;