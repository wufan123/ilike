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
    ScrollView
} from 'react-native';
import BaseView from '../../common/basePage';
import globalStyles from '../../../style/index';
import QRCode from 'react-native-qrcode';
import Communications from 'react-native-communications';

const { width, height } = Dimensions.get('window');

class ComboOrderDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: [[1, 2, 3, 4, 5], [1, 2, 3]],
            isAmountExpanded: false,
        }
    }

    renderGoodsCell = ({ item, index }) => {
        return (
            <View style={[styles.rowSpaceBetween, { paddingVertical: 4 }]}>
                <Text style={[globalStyles.fontWithSize(14), globalStyles.fontGray]}>贵宾券</Text>
                <Text style={[globalStyles.fontWithSize(14), globalStyles.fontGray]}>×1</Text>
            </View>
        );
    }

    renderPackageCell = ({ item, index }) => {
        return (
            <View style={styles.packageCell} >
                <View style={[styles.rowSpaceBetween, { paddingVertical: 9 }]} >
                    <Text style={[globalStyles.fontWithSize(18), globalStyles.fontBlack]}>套票1</Text>
                    <Text style={[globalStyles.fontWithSize(18), globalStyles.fontBlack]}>×1</Text>
                </View>
                <View style={globalStyles.lineSeperator} />
                <FlatList
                    data={item}
                    keyExtractor={(tItme, tIndex) => ('goods' + tIndex)}
                    renderItem={this.renderGoodsCell}
                />
            </View>
        )
    }

    renderOrderList = () => {
        return (
            <FlatList
                data={this.state.order}
                keyExtractor={(item, index) => ('package' + index)}
                renderItem={this.renderPackageCell}
            />
        )
    }

    renderExplainCell = () => {
        return (
            <View style={[styles.backgroundWhite, { padding: 15 }]} >
                <Text style={[globalStyles.font16, globalStyles.fontBlack, {lineHeight: 24}]}>订单中的票券已放入<Text style={[globalStyles.fontColorPrimary, globalStyles.font16]} >“我的-优惠券”</Text></Text>
                <Text style={[globalStyles.font16, globalStyles.fontBlack, {lineHeight: 24}]}>实物卖品凭票至影城柜台兑换。</Text>
            </View>
        );
    }

    renderCodeCell = () => {
        return (
            <View style={styles.codeCell} >
                <View style={[globalStyles.row, globalStyles.alignItemsCenter, { paddingHorizontal: 15, height: 39 }]} >
                    <Image resizeMode="contain" style={{ width: 15, height: 15 }} source={require('../../../assets/me/getTicket.png')} />
                    {globalStyles.hSeparatorWithWidth(4)}
                    <Text style={[globalStyles.font14, globalStyles.fontGray]} >凭如下信息至影城自助取票机取票</Text>
                </View>
                <View style={globalStyles.lineSeperator} />
                <View style={[globalStyles.alignItemsCenter]} >
                    {globalStyles.vSeparatorWithHeight(8)}
                    <Text style={[globalStyles.font14, globalStyles.fontColorPrimary]} >订单号：123456789</Text>
                    {globalStyles.vSeparatorWithHeight(8)}
                    <Text style={[globalStyles.font14, globalStyles.fontColorPrimary]} >取货码：8986546789327</Text>
                    {globalStyles.vSeparatorWithHeight(12)}
                    <QRCode
                        value={'8986546789327'}
                        size={width * 0.6}
                    />
                </View>
                {globalStyles.vSeparatorWithHeight(20)}
            </View>
        )
    }

    callCinema = () => {
        Communications.phonecall('10086', true)
    }

    renderCinemaCell = () => {
        return (
            <View style={[styles.rowSpaceBetween, styles.backgroundWhite, {paddingVertical: 15}]} >
                <View style={[globalStyles.flex, {paddingHorizontal: 15}]} >
                    <Text style={[globalStyles.font16, globalStyles.fontBlack]} >中瑞国际影城红星店</Text>
                    {globalStyles.vSeparatorWithHeight(8)}
                    <Text style={[globalStyles.font16, globalStyles.fontGray]} >台江区工业路红星美凯龙(宝龙城市广场)</Text>
                </View>
                <TouchableOpacity style={styles.phoneContainer} onPress={this.callCinema}>
                    <Image resizeMode="contain" style={{ width: 25, height: 25 }} source={require('../../../assets/me/phone.png')} />
                </TouchableOpacity>
            </View>
        );
    }

    expandAmountDetail = () => {
        this.setState({
            isAmountExpanded: !this.state.isAmountExpanded,
        });
    }

    renderOrderAmountCell = () => {
        let expandImage = this.state.isAmountExpanded ? require('../../../assets/common/icon_movie_unexp.png') : require('../../../assets/common/icon_movie_exp.png');
        var amountDetail = null;
        if (this.state.isAmountExpanded) {
            amountDetail = (
                <FlatList
                    data={[1, 2, 3]}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={()=>globalStyles.vSeparatorWithHeight(6)}
                    renderItem={({ item, index }) => (
                        <View style={[styles.rowSpaceBetween, {paddingVertical: 3}]} >
                            <Text style={[globalStyles.font14, globalStyles.fontGray]}>账户余额支付：</Text>
                            <Text style={[globalStyles.font14, globalStyles.fontGray]}>￥80</Text>
                        </View>
                    )}
                />
            );
        }
        return (
            <View style={styles.amountCell} >
                <TouchableOpacity onPress={this.expandAmountDetail}>
                    <View style={styles.rowSpaceBetween} >
                        <View style={globalStyles.row} >
                            <Text style={[globalStyles.font16, globalStyles.fontBlack]} >订单总额:<Text style={[globalStyles.fontColorPrimary, globalStyles.font16]} >￥100</Text></Text>
                            {globalStyles.hSeparatorWithWidth(4)}
                            <Text style={[globalStyles.font16, globalStyles.fontBlack]}>实付:<Text style={[globalStyles.fontColorPrimary, globalStyles.font16]}>￥80</Text></Text>
                        </View>
                        <View style={[globalStyles.row, globalStyles.alignItemsCenter]} >
                            <Text style={[globalStyles.fontGray, globalStyles.font16]} >详情</Text>
                            <Image resizeMode="contain" style={{ width: 16, height: 8 }} source={expandImage} />
                        </View>
                    </View>
                </TouchableOpacity>
                {amountDetail}
            </View>
        );
    }

    render() {
        return (
            <BaseView title="详情">
                <ScrollView style={globalStyles.flex} >
                    {this.renderOrderList()}
                    {globalStyles.vSeparatorWithHeight(8)}
                    {this.renderExplainCell()}
                    {globalStyles.vSeparatorWithHeight(8)}
                    {this.renderOrderAmountCell()}
                    {globalStyles.vSeparatorWithHeight(8)}
                    {this.renderCodeCell()}
                    {globalStyles.vSeparatorWithHeight(8)}
                    {this.renderCinemaCell()}
                </ScrollView>
            </BaseView>
        );
    }
}

const styles = StyleSheet.create({
    rowSpaceBetween: {
        ...globalStyles.row,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    packageCell: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    backgroundWhite: {
        backgroundColor: 'white',
    },
    amountCell: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    codeCell: {
        backgroundColor: 'white',
    },
    phoneContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#e8e8e8',
        width: 80,
        height: 50
    }
});

module.exports = ComboOrderDetailScreen;