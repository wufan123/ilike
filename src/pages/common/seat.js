import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
class Seat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 25,
            height: 25,
            seat: [
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78],
                [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 4, 5, 7, 8, 5, 4, 5, 4, 7, 8, 4, 5, 4, 78]]
        }
    }

    getSeat(item) {
        return (<Image style={{ width: 25, height: 25 }}
            source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
        />)
    }
    getItem(row) {
        return row.map((item) => {
            this.getSeat()
        })
    }
    getRow(data) {
        return data.map(item => {
            this.getSeat(item)
        }) 
    }
    render() {
        return (
            <View style={styles.seatContainer}>
                <ScrollView style={{flex:1}}>
                    <ScrollView style={{flex:1}} horizontal={true}>
                        <Image style={{ width: this.state.width, height: this.state.height }}
                            source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
                        />
                        {this.getRow(this.state.seat)} 
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    seatContainer: {
        height: 100,
    },

});

export default Seat