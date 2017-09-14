import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';

class SeatSelectView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      seats: ds.cloneWithRows([[1,2,3,4,6], [1,2,3,4], [1,2,3,4]]),
      ds: ds,
    }
  }

  componentDidMount() {
    seats = []
    for (i=0; i<20; i++) {
      row = []
      for (j=0; j<30; j++){
        row.push(1)
      }
      seats.push(row)
    }
    console.log(seats)
    this.setState({
      seats: this.state.ds.cloneWithRows(seats)
    })
  }

  renderColumn() {
    return (
      <Text>hello</Text>
    )
  }

  renderRow(data, sectionID, rowID) {
    cdata = this.state.ds.cloneWithRows(data)
    return (
      <ListView
        horizontal={true}
        maximumZoomScale={2}    // 子组件(图片)放大倍数
        minimumZoomScale={1.0}  // 子组件(图片)缩小倍数
        style={{width:320, height:30}}
        dataSource={cdata}
        renderRow={(cdata)=>this.renderColumn(cdata)}
      />
    )
  }

  render() {
    return (
      <ListView
        style={{width:320, height:300}}
        dataSource={this.state.seats}
        renderRow={(data)=>this.renderRow(data)}
      />
    )
  }
};

module.exports=SeatSelectView;
