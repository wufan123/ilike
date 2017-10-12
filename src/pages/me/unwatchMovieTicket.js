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
import BaseView from '../common/basePage';
import globalStyle from '../../style/index';
import QRCode from 'react-native-qrcode';

const { width, height } = Dimensions.get('window');

class UnWatchMovieTicketScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [1, 2, 3, 4]
        };
    }

    renderTicket = ({ item, index }) => {
        return (
            <View style={styles.ticketCell}>
                <View style={styles.seatInfo}>
                    <View style={styles.movieTitle}>
                        <Text style={[globalStyle.fontBlack, globalStyle.font15]}>九层妖塔</Text>
                        <Image style={styles.movieTypeImage} source={require('../../assets/movie/ticket_2d.png')} />
                    </View>
                    {this.vSeparatorWithHeight(10)}
                    <Text style={styles.seatInfoText}>影厅：2号厅</Text>
                    {this.vSeparatorWithHeight(8)}
                    <Text style={styles.seatInfoText}>座位：1排1座 1排1座 1排1座 1排1座</Text>
                    {this.vSeparatorWithHeight(8)}
                    <Text style={styles.seatInfoText}>影院：中瑞国际影城红星店 5号厅</Text>
                </View>
                <View style={globalStyle.lineSeperator} />
                <View style={styles.ticketCodeCell}>
                    <Text style={styles.ticketCodeText}>订单号：12345678900234567</Text>
                    {this.vSeparatorWithHeight(8)}
                    <Text style={styles.ticketCodeText}>取票码：12345678900234567</Text>
                    {this.vSeparatorWithHeight(15)}
                    <QRCode
                        value={'12345678900234567'}
                        size={width * 0.6}
                    />
                </View>
            </View>
        )
    }

    separator = () => {
        return (
            <View style={{ height: 15 }} />
        )
    }

    vSeparatorWithHeight = (height) => {
        return (
            <View style={{ height: height }} />
        )
    }

    renderTicketsList = () => {
        return (
            <FlatList
                data={this.state.tickets}
                keyExtractor={(item, index) => ('' + index)}
                renderItem={this.renderTicket}
                ItemSeparatorComponent={this.separator}
            />
        )
    }

    goToSchedule = () => {
        this.props.navigation.goBack();
        global.tabNavigation.navigate(global.scheduleScreen);
    }

    renderEmptyView = () => {
        return (
            <View style={[globalStyle.flex, styles.emptyContainer]}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.goToSchedule}
                >
                    <Image style={styles.emptyImage} source={require('../../assets/movie/no_taketicket_icon_text.png')} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <BaseView title={'待取票'}>
                {this.state.tickets.length > 0 ? this.renderTicketsList() : this.renderEmptyView()}
            </BaseView>
        )
    }
}

const styles = StyleSheet.create({
    ticketCell: {
        backgroundColor: 'white',
    },
    seatInfo: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    movieTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    movieTypeImage: {
        resizeMode: 'contain',
        height: 24
    },
    lineHeight24: {
        lineHeight: 24,
    },
    seatInfoText: {
        ...globalStyle.font13,
        ...globalStyle.fontGray
    },
    ticketCodeCell: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    ticketCodeText: {
        ...globalStyle.fontColorPrimary,
        fontSize: 15
    },
    emptyContainer: {
        paddingTop: 142 * width / 375,
        alignItems: 'center',
    },
    emptyImage: {
        resizeMode: 'contain',
        width: width * 0.6,
        height: 314 / 397 * width * 0.6,
    }
});

module.exports = UnWatchMovieTicketScreen;