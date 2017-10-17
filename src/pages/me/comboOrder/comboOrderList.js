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
} from 'react-native';
import BaseView from '../../common/basePage';
import { RefreshScrollView } from '../../common/pull';
import globalStyles from '../../../style/index';

class ComboOrderScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comboOrders: [
                [[1, 2, 3], [1, 2]],
                [[1, 2]],
            ]
        };
    }

    wSpaceSeparate = (width) => {
        return (
            <View style={{ width: width }} />
        );
    }

    vSpaceSeparate = (height) => {
        return (
            <View style={{ height: height }} />
        );
    }

    _onPullRelease = (resolve) => {
        setTimeout(() => {
            resolve();
            this.moreTime = 0;
        }, 3000);
    }

    renderEmptyView = () => {

    }

    goodsCell = ({ item, index }) => {
        return (
            <View style={[globalStyles.row, globalStyles.alignItemsCenter]} >
                <View>
                    <Image style={styles.goodsImage} resizeMode="stretch" source={{
                        uri: 'http://images.zmaxfilm.com/test/zmaxyun/sale/Cache/2017-09-01/150425514938.png'
                    }} />
                </View>
                {this.wSpaceSeparate(8)}
                <View style={{ flex: 1, justifyContent: 'space-between' }} >
                    <Text style={[globalStyles.fontBlack, globalStyles.font16]} >双人卖品</Text>
                    {this.vSpaceSeparate(8)}
                    <View style={styles.rowSpaceBetween}>
                        <View>
                            <Text style={[globalStyles.font14, globalStyles.fontGray]} >数量：×1</Text>
                            {this.vSpaceSeparate(6)}
                            <Text style={[globalStyles.font14, globalStyles.fontGray]} >兑换期限：2017-10-22</Text>
                        </View>
                        <Image resizeMode={"stretch"} style={{ width: 7, height: 13 }} source={require('../../../assets/common/right_btn.png')} />
                    </View>
                </View>
            </View>
        );
    }

    renderPackageCell = ({ item, index }) => {
        return (
            <View>
                <View style={[globalStyles.row, { justifyContent: 'space-between', height: 39, alignItems: 'center' }]} >
                    <Text style={[globalStyles.fontBlack, globalStyles.font16]} >100套餐</Text>
                    <View style={globalStyles.row} >
                        <Text style={[globalStyles.fontGray, globalStyles.font14]} >×1</Text>
                        {this.wSpaceSeparate(8)}
                        <Text style={[globalStyles.fontOrange, globalStyles.font14]} >￥30</Text>
                    </View>
                </View>
                <FlatList
                    data={item}
                    keyExtractor={(tItem, tIndex) => ('goods' + tIndex)}
                    renderItem={this.goodsCell}
                    ItemSeparatorComponent={() => this.vSpaceSeparate(8)}
                />
            </View>
        );
    }

    deleteOrder = (item, index) => {

    }

    goToOrderDetail = (item, index) => {
        global.navigation.navigate('ComboOrderDetail');
    }

    comboOrderCell = ({ item, index }) => {
        return (
            <View style={styles.comboOrderCell} >
                <View style={styles.codeCell}>
                    <View style={globalStyles.row} >
                        <Text style={styles.codeText} >订单号：123456</Text>
                        {this.wSpaceSeparate(24)}
                        <Text style={styles.codeText} >取票码：2345678</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.deleteOrder(item, index)}>
                        <Image resizeMode={"contain"} style={{ width: 12, height: 12 }} source={require('../../../assets/me/close.png')} />
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.lineSeperator} />
                <TouchableOpacity onPress={()=>this.goToOrderDetail(item, index)} >
                    <FlatList
                        data={item}
                        keyExtractor={(tItem, tIndex) => ('package' + tIndex)}
                        renderItem={this.renderPackageCell}
                    />
                </TouchableOpacity>
                {this.vSpaceSeparate(10)}
            </View>
        );
    }

    renderComboOrderList = () => {
        return (
            <FlatList
                data={this.state.comboOrders}
                keyExtractor={(item, index) => ('' + index)}
                renderItem={this.comboOrderCell}
                ItemSeparatorComponent={() => this.vSpaceSeparate(12)}
            />
        );
    }

    render() {
        return (
            <BaseView title={"套票订单"}>
                <RefreshScrollView style={globalStyles.flex} onPullRelease={this._onPullRelease}>
                    {this.renderComboOrderList()}
                </RefreshScrollView>
            </BaseView>
        )
    }
}

const styles = StyleSheet.create({
    rowSpaceBetween: {
        ...globalStyles.row,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    codeCell: {
        ...globalStyles.row,
        height: 39,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    codeText: {
        ...globalStyles.fontColorPrimary,
        ...globalStyles.font16,
    },
    comboOrderCell: {
        paddingHorizontal: 15,
        backgroundColor: 'white'
    },
    goodsImage: {
        width: 99,
        height: 66,
    }
});

module.exports = ComboOrderScreen;