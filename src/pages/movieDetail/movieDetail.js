import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import globalStyle from '../../style/index';

const { screenWidth, screenHeight } = Dimensions.get('window')

class MovieDetailScreen extends Component {

    _renderBackButton() {
        return (
            <TouchableOpacity style={styles.backButton}>
                <Image
                    style={{width: 18, height: 18}}
                    source={require('../../assets/common/back.png')}
                />
            </TouchableOpacity>
        )
    }

    _renderVideoView() {
        return (
            <TouchableOpacity>
                <View style={styles.videoContainer}>
                    <ImageBackground
                    style={styles.videoImage}
                    source={{uri:'https://www.zhaiiker.com/wp-content/uploads/2017/04/33332515934_608bd7585d_b.jpg'}}>
                        <Image
                            style={styles.playImage}
                            source={require('../../assets/common/icon_play_more.png')}/>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <StatusBar
                    hidden={true}
                />
                {this._renderBackButton()}
                {this._renderVideoView()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: globalStyle.backgroundColor,
    },
    videoContainer: {
        aspectRatio: 16/9,
        backgroundColor: '#333',
    },
    videoImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    playImage: {
        width: 59,
        height: 59,
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        opacity: 0.5,
        backgroundColor: '#000',
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 20,
    }
})

module.exports = MovieDetailScreen;