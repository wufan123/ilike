import React, {Component} from 'react';
import {
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import SQLiteStorage from 'react-native-sqlite-storage';
import {pay} from 'react-native-alipay';
import JPushModule from 'jpush-react-native'

function tabBarIcons(focused) {
    let icon = focused ? require('../../assets/tabs/icon_me_s.png') : require('../../assets/tabs/icon_me_n.png')
    return (
        <Image
            source={icon}
            style={[styles.tab_icon]}
        />
    );
}

class MeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => tabBarIcons(focused)
    }


    render() {
        JPushModule.addReceiveNotificationListener((map) => {
            console.log("alertContent: " + map.alertContent);
            console.log("extras: " + map.extras);
            // var extra = JSON.parse(map.extras);
            // console.log(extra.key + ": " + extra.value);
        });
        const {navigate} = this.props.navigation;
        return (<View >
            <Button
                onPress={() => {
                    navigate('QrCodeScan')
                }}
                title="qrCode"/>
            <Button
                style={{top: 20}}
                onPress={() => {
                    navigate('VideoView')
                }}
                title="video"/>
            <Button
                style={{top: 20}}
                onPress={() => {
                    pay("", true);
                }}
                title="alipay"/>
            <Button
                style={{top: 20}}
                onPress={() => {
                    SQLiteStorage.openDatabase(
                        "test.db",
                        "1.0",
                        "MySQLite",
                        -1,
                        ()=>{
                            console.log("sql open")
                        },
                        (err)=>{
                            console.log("sql err")
                        });
                }}
                title="open sql"/>
        </View>)
    }
}

const styles = StyleSheet.create({
    tab_icon: {
        width: 26,
        height: 26,
    },
});

module.exports = MeScreen;
