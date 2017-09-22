import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Header from '../common/header'
import {
    ImageButton, Button
} from '../common/component'
var theme = require('../../style')

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '商品详情',
            info: {}
        }
    }

    _onSubPress() {
        if (!this.state.info.num)
            return
        this.state.info.num--
        this.setState({
            info: this.state.info
        })
    }
    _onAddPress() {
        if (!this.state.info.num)
            this.state.info.num = 0
        this.state.info.num++
        this.setState({
            info: this.state.info
        })
    }
    getGoodsDetail(){
        return null
    }

    render() {
        return (<View style={theme.flex}>
            <Header title={this.state.title} />
            <Image style={styles.image} source={require('../../assets/common/default_goods.png')} />
            <View style={theme.flex}>
                <View style={[styles.item, theme.whiteBlockWithPadding, theme.row]}>
                    <Text style={[theme.fontBalck, theme.font16, theme.flex]}>100套票</Text>
                    <Text style={[theme.fontOrange, theme.font14]}>￥
                     <Text style={[theme.fontOrange, theme.font24]}>10</Text>
                        <Text style={[theme.ml10, theme.fontGray, theme.font14, theme.textLineThrough]}>35</Text>
                    </Text>
                </View>
                <View style={[styles.item, theme.whiteBlockWithPadding, theme.row, theme.mt10]}>
                    <Text style={[theme.fontBalck, theme.font16, theme.flex]}>数量：</Text>
                    <View style={styles.operation}>
                        {this.state.info.num && this.state.info.num > 0 ? (<ImageButton style={styles.operationItem}
                            source={require('../../assets/store/subtract.png')}
                            activeSource={require('../../assets/store/subtract_on.png')}
                            onPress={() => this._onSubPress()} />) : null}
                        {this.state.info.num && this.state.info.num > 0 ? (<Text style={styles.operationNum}>1</Text>) : null}
                        <ImageButton style={styles.operationItem}
                            source={require('../../assets/store/add.png')}
                            activeSource={require('../../assets/store/add_on.png')}
                            onPress={() => this._onAddPress()} />
                    </View>
                </View>
                <View style={[styles.item, theme.whiteBlockWithPadding, theme.mt10]}>
                    <View style={[styles.itemTitle, theme.bottomBorder]}>
                        <Text style={[theme.fontBalck, theme.font16]}>商品详情</Text>
                        {this.getGoodsDetail()}
                    </View>
                </View>
                 <View style={[styles.item, theme.whiteBlockWithPadding, theme.mt10]}>
                    <View style={[styles.itemTitle, theme.bottomBorder]}>
                        <Text style={[theme.fontBalck, theme.font16]}>兑换须知</Text>
                    </View>
                </View>
            </View>
            <Button text={'确定(' + this.state.info.num + ')'} />
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 222,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    item: {
        minHeight: 53,
        alignItems: 'center',
        justifyContent: 'center'
    },
    operation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    operationItem: {
        width: 26,
        height: 26,
    },
    operationNum: {
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 2
    },
    itemTitle: {
        width: '100%',
        height: 40,
        justifyContent:'center' 
    }
})