import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Header from '../../common/header'
import Tab from '../../common/tab'
var theme = require('../../../style')
const { width, height } = Dimensions.get('window')

export default class ScheduleList extends Component {

    fakeSeatsInfo() {
        var seatsInfos = {};
        var rowIndex = [];
        var seats = [];
        for (var row = 1; row <= 15; row++) {
            rowIndex.push('' + row);
            rowSeats = [];
            for (var col = 1; col <= 30; col++) {
                seat = { row: '' + row, column: '' + col, seatType: ['N', 'Lk', 'E'][Math.floor(Math.random() * 3)] };
                rowSeats.push(seat);
            }
            seats.push(rowSeats);
        }
        seatsInfos = {
            row: rowIndex,
            seat: seats
        }
        return seatsInfos;
    }

    constructor(props) {
        super(props)
        console.log('seatinfos:')
        console.log(this.fakeSeatsInfo());
        this.state = {
            title: '排期',
            plan: ['星期一', '星期三', '星期二', '星期四', '星期五', '星期六', '星期日'],
            list: [
                { data: [1, 2, 3, 4, 5] },
                { data: [1, 2, 3] },
                { data: [1, 2, 3, 4] },
                { data: [1, 2,] },
            ],
        }
    }

    getPlanListData() {
        return this.state.list
    }

    _gotoChooseSeat(item) {
        global.navigation.navigate('ChooseSeat');
    }

    _getListItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this._gotoChooseSeat(item)}> 
                <View style={[theme.whiteBlockWithPadding, styles.planItem]}>
                    <View style={[theme.flex, theme.row]}>
                        <Text style={[theme.fontBlack, theme.font24]}>9:30 </Text>
                        <View style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter]}><Text style={[theme.fontGray, theme.font16]}>国语ZMX 3D</Text></View>
                        <Text style={[theme.fontOrange, theme.font14]}>￥100.0起</Text>
                    </View>
                    <View style={[theme.flex, theme.row]}>
                        <Text style={[theme.fontGray, theme.font12]}>20:00结束</Text>
                        <View style={[theme.flex, theme.alignItemsCenter, theme.justifyContentCenter]}><Text style={[theme.fontGray, theme.font12]}>余座：50</Text></View>
                        <Text style={[theme.fontGray, theme.font12, theme.textLineThrough]}>￥100.0</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _getFilmPlanListSeparator() {
        return (<View style={[theme.bottomBorder]}></View>)
    }

    _getFilmPlanList() {
        return (<FlatList style={[styles.planListBox, theme.mb10, theme.mt10]}
            extraData={this.state}
            data={this.state.list[0].data}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._getFilmPlanListSeparator}
            renderItem={this._getListItem}
        />)
    }

    _keyExtractor = (item, index) => index

    render() {
        return (
            <View style={theme.flex}>
                <Header  title={this.state.title}></Header>
                <Tab tab={this.state.plan} />
                {this._getFilmPlanList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tab_icon: {
        width: 26,
        height: 26,
    },
    filmDetial: {
        backgroundColor: '#ffffff',
        paddingTop: theme.pagePadding,
        paddingBottom: theme.pagePadding,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.row,
    },
    cover: {
        width: 41,
        height: 54,
        marginRight: 10,
    },
    moreImg: {
        width: 9,
        height: 16
    },
    planListBox: {
        borderColor: theme.borderColor,
        borderWidth: 1,
    },
    planItem: {
        paddingTop: theme.pagePadding,
        paddingBottom: theme.pagePadding,
    }

});

