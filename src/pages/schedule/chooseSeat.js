import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from '../common/header'
import {
    Button
} from '../common/component'
import MovieSeat from 'react-native-movie-seats'
import globalStyle from '../../style/index'
let theme = require('../../style')

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '西游记之大闹天空',
            info: {}
        }
    }


    render() {
        let seat = []
        let row = []
        for (let i = 0; i < 10; i++) {
            seat[i] = []
            for (let j = 0; j < 11; j++) {
                seat[i][j] = {
                    type: 3,
                    row: i + 1,
                    col: j + 1
                }
            }
            row.push(i + 1)
        }
        let data = {
            seat: seat,
            row: row
        }
        return (<View style={theme.flex}>
            <Header title={this.state.title}/>
            <View style={styles.planBar}>
                <View style={[styles.planBarItem, {justifyContent: 'flex-start', marginLeft: 16}]}>
                    <Text style={{marginRight: 16}}>&lt;</Text>
                    <View>
                        <Text>
                            无场次
                        </Text>
                        <Text>
                            上一场
                        </Text>
                    </View>
                </View>
                <View style={[styles.planBarItem, {justifyContent: 'center'}]}>
                    <View>
                        <Text>
                            无场次
                        </Text>
                        <Text>
                            上一场
                        </Text>
                    </View>
                </View>
                <View style={[styles.planBarItem, {justifyContent: 'flex-end', marginRight: 16}]}>
                    <View>
                        <Text>
                            无场次
                        </Text>
                        <Text>
                            上一场
                        </Text>
                    </View>
                    <Text style={{marginLeft: 16}}>&gt;</Text>
                </View>
            </View>
            <View style={theme.flex}>
                <View style={{height: 110, alignItems: 'center'}}>
                    <View style={styles.seatInfo}>
                        <View style={styles.seatItem}>
                            <Image style={styles.seatItemIcon}
                                   resizeMode="contain"
                                   source={require('../../assets/shedule/seat_checked.png')}/>
                            <Text>
                                已选
                            </Text>
                        </View>
                        <View style={styles.seatItem}>
                            <Image style={styles.seatItemIcon} resizeMode="contain" source={require('../../assets/shedule/seat_lock.png')}/>
                            <Text>
                                已售
                            </Text>
                        </View>
                        <View style={styles.seatItem}>
                            <Image style={styles.seatItemIcon}
                                   resizeMode="contain"
                                   source={require('../../assets/shedule/seat_normal.png')}/>
                            <Text>
                                已选
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 8}}>
                        <Image style={{width: 270, height: 16}} source={require('../../assets/shedule/screen.png')}/>
                        <Text>
                            中瑞国际影城(红星店)ZMAX巨幕厅
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                    <MovieSeat style={{flex: 1}} seatInfos={data}/>
                </View>
                <View style={{alignItems: 'center', height: 120}}>
                    <View style={styles.seatInfo}>
                        <View style={styles.seatItem}>
                            <Image style={styles.seatItemIcon}
                                   resizeMode="contain"
                                   source={require('../../assets/shedule/seat_gold.png')}/>
                            <Text>
                                会员黄金座
                            </Text>
                        </View>
                        <View style={styles.seatItem}>
                            <Image style={styles.seatItemIcon} resizeMode="contain" source={require('../../assets/shedule/seat_lover.png')}/>
                            <Text >
                                情侣座
                            </Text>
                        </View>
                        <View style={styles.seatItem}>
                            <Image style={styles.seatItemIcon}
                                   resizeMode="contain"
                                   source={require('../../assets/shedule/seat_vip.png')}/>
                            <Text>
                                VIP
                            </Text>
                        </View>
                    </View>
                    <View style={styles.chooseInfo}>
                        <TouchableOpacity style={styles.chooseSeatButton} onPress={() => {
                        }}>
                            <Text style={{
                                color: globalStyle.fontColorGray
                            }}>一人</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseSeatButton} onPress={() => {
                        }}>
                            <Text style={{
                                color: globalStyle.fontColorGray
                            }}>两人</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseSeatButton} onPress={() => {
                        }}>
                            <Text style={{
                                color: globalStyle.fontColorGray
                            }}>三人</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseSeatButton} onPress={() => {
                        }}>
                            <Text style={{
                                color: globalStyle.fontColorGray
                            }}>四人</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <Button text={'确定(' + this.state.info.num + ')'}/>
        </View>)
    }
}

const styles = StyleSheet.create({
    chooseInfo: {
        paddingLeft:10,
        paddingRight:10,
        marginTop: 21,
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    planBar: {
        height: 48,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    planBarItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    seatInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height:20
    },
    seatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    seatItemIcon: {height: 16, marginRight: 5},
    chooseSeatButton: {
        flexDirection: 'row',
        width: 70,
        height: 30,
        borderWidth: 1,
        borderColor: globalStyle.fontColorGray,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        bottom: 0,
        right: 0
    },

})