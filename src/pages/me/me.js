import React, {Component} from 'react';
import {
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import Video from 'react-native-video'
import {pay} from 'react-native-alipay';

function tabBarIcons(focused) {
    if (focused) {
        return (
            <Image
                source={require('../../assets/tabs/icon_me_s.png')}
                style={[styles.tab_icon]}
            />
        );
    }
    else {
        return (
            <Image
                source={require('../../assets/tabs/icon_me_n.png')}
                style={[styles.tab_icon]}
            />
        );
    }
}

class MeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => tabBarIcons(focused)
    }

    render() {
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
