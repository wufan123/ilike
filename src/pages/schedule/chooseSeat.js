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
            info: {},
            selectedSeats: [],
            selectedSeats:[]
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
                    row: i ,
                    col: j
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
                            <Image style={styles.seatItemIcon} resizeMode="contain"
                                   source={require('../../assets/shedule/seat_lock.png')}/>
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
                    <MovieSeat selectedSeats={this.state.selectedSeats}  style={{flex: 1}} seatInfos={data} maxSelectedSeatsCount={4} select={(seat) => {
                        this.select(seat)
                    }} unselect={(seat) => {
                        this.unSelect(seat)
                    }}/>
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
                            <Image style={styles.seatItemIcon} resizeMode="contain"
                                   source={require('../../assets/shedule/seat_lover.png')}/>
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
                        {this.getChooseInfo()}
                    </View>
                </View>
            </View>
            <Button onPress={() => {
                this.select({row: this.state.selectedSeats.length + 1, col: 4})
            }} text={'确定(' + this.state.info.num + ')'}/>
        </View>)
    }

    select(seat) {
        this.setState((prevState) => {
            if (prevState.selectedSeats.length < 4)
            {
                let array = prevState.selectedSeats.concat([seat])
                prevState.selectedSeats = array
            }
            return prevState
        });
    }

    unSelect(seat) {
        this.setState((prevState) => {
            /*let index = prevState.selectedSeats.indexOf(seat)
             if(index>=0) {
             prevState.selectedSeats.splice(index, 1)
             }*/
            let sSeats = prevState.selectedSeats.concat([]);
            for (let i = 0; i < sSeats.length; i++) {
                if (seat.row == sSeats[i].row && seat.col == sSeats[i].col) {
                    sSeats.splice(i, 1)
                    break;
                }
            }
            prevState.selectedSeats =sSeats;
            return prevState;
        })
    }
    getChooseInfo() {
        let num = [0, 1, 2, 3]
        return num.map(item => {
            let seats = this.state.selectedSeats
            if (seats[item]) {
                return (
                    <TouchableOpacity onPress={() => {
                        this.unSelect(seats[item])
                    }} key={item} style={[styles.chooseTip, {borderColor: "#fc9d40"}]}>
                        <Text
                            style={[styles.subFont, globalStyle.fontOrange]}>{`${seats[item].row}排${seats[item].col}座 ×`}</Text>
                    </TouchableOpacity>
                )
            } else {
                return (<View key={item} style={styles.chooseTip}>
                    <Text style={styles.subFont}>{item + 1}人</Text>
                </View>)
            }
        });
    }


}

const styles = StyleSheet.create({
    subFont: {
        color: '#cbcbcb',
        fontSize: 12
    },
    prmaryFont: {
        color: "#3f3f3f"
    },
    chooseInfo: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 21,
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        height: 20
    },
    seatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    seatItemIcon: {height: 16, marginRight: 5},
    chooseTip: {
        flexDirection: 'row',
        width: 70,
        height: 30,
        borderWidth: 0.5,
        borderColor: "#cbcbcb",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        bottom: 0,
        right: 0
    },

})