import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button
} from 'react-native';
import Header from '../common/header';
import MovieSeats from 'react-native-movie-seats';

const { width, height } = Dimensions.get('window');

function tabBarIcons(focused) {
  let icon = focused ? require('../../assets/tabs/icon_schedule_s.png') : require('../../assets/tabs/icon_schedule_n.png')
  return (
    <Image
      source={icon}
      style={[styles.tab_icon]}
    />
  );
}

class ScheduleScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '排期',
    tabBarIcon: ({ focused }) => tabBarIcons(focused)
  }

  fakeSeatsInfo() {
    var seatsInfos = {};
    var rowIndex = [];
    var seats = [];
    for (var row = 1; row <= 15; row++) {
      rowIndex.push(''+row);
      rowSeats = [];
      for (var col = 1; col <= 30; col++) {
        seat = {row:''+row, column:''+col, seatType:['N', 'Lk', 'E'][Math.floor(Math.random()*3)]};
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
      selectedSeats: [
        {row:'3', column:'2'},
        {row:'2', column:'5'},
        {row:'4', column:'8'},
        {row:'7', column:'5'},
      ],
      seatInfos: this.fakeSeatsInfo()
      // {
      //     row:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      //     seat:[
      //         [{row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'1', seatType:'N'}, {row:'1',column:'2', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'},{row:'1',column:'1', seatType:'N'}, {row:'1',column:'2', seatType:'N'}, {row:'1',column:'3', seatType:'N'}, {row:'1',column:'4', seatType:'N'}, {row:'1',column:'5', seatType:'N'}],
      //         [{row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'1', seatType:'N'}, {row:'2',column:'2', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'},{row:'2',column:'1', seatType:'N'}, {row:'2',column:'2', seatType:'N'}, {row:'2',column:'3', seatType:'N'}, {row:'2',column:'4', seatType:'LK'}, {row:'2',column:'5', seatType:'N'}],
      //         [{row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'1', seatType:'N'}, {row:'3',column:'2', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'},{row:'3',column:'1', seatType:'N'}, {row:'3',column:'2', seatType:'N'}, {row:'3',column:'3', seatType:'E'}, {row:'3',column:'4', seatType:'N'}, {row:'3',column:'5', seatType:'N'}],
      //         [{row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'5',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'6',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'E'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'7',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'8',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'9',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'10',column:'1', seatType:'N'},{row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'11',column:'1', seatType:'E'},{row:'11',column:'1', seatType:'E'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'11',column:'1', seatType:'N'},{row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'12',column:'1', seatType:'N'},{row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'13',column:'1', seatType:'N'},{row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'14',column:'1', seatType:'E'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'14',column:'1', seatType:'N'},{row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //         [{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'15',column:'1', seatType:'N'},{row:'4',column:'2', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'},{row:'4',column:'1', seatType:'N'}, {row:'4',column:'2', seatType:'LK'}, {row:'4',column:'3', seatType:'N'}, {row:'4',column:'4', seatType:'N'}, {row:'4',column:'5', seatType:'N'}],
      //     ],
      // }
    }
  }

  render() {
    return (
      <View>
        <Header title={this.state.title} disableBack={true}></Header>
        <Text>
          schedule
        </Text>
        <MovieSeats
          ref={(c)=>{this.movieSeats=c}}
          seatInfos={this.state.seatInfos}
          style={styles.moviesSeats}
          width={width}
          height={400}
          maxSelectedSeatsCount={5}
          select={(seat)=>{
          }}
          selectedSeats={this.state.selectedSeats}
          hallName={'Zmax'}
          />
        <Button
          title={'设置座位'}
          onPress={() => {
              this.setState({
                seatInfos: this.fakeSeatsInfo(),
                selectedSeats: [
                  {row:'3', column:'2'},
                  {row:'4', column:'8'},
                  {row:'7', column:'5'},
                  {row:'9', column:'20'},
                  ]
              })
            }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab_icon: {
    width: 26,
    height: 26,
  },
  moviesSeats: {
  }
});

module.exports = ScheduleScreen;
