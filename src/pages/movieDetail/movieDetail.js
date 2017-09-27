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
import LinearGradient from 'react-native-linear-gradient';
import RatingView from '../common/component/ratingView'

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
                    <LinearGradient style={styles.videoLinearGradient}
                        colors={['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.7)']}
                        locations={[0.3, 0.7, 1]}
                    >
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    }

    _renderMovieItem() {
        return(
            <View style={styles.movieSocialContainer}>
                <View style={styles.movieContainer}>
                    <View style={styles.movieThumbContainer}>
                        <Image style={styles.movieThumb} source={{uri: 'http://img5.mtime.cn/pi/2017/03/23/233340.20916876_1000X1000.jpg'}}/>
                    </View>
                    <View style={styles.movieRightContainer}>
                        <Text>异形</Text>
                        <View>
                            <Text>主演:</Text>
                            <Text>汤姆·斯凯里特，西格妮·韦弗，维罗尼卡·卡维特，哈利·戴恩·斯坦通，约翰·赫特，伊安·霍姆</Text>
                        </View>
                        <View>
                            <Text>1.6</Text>
                            <RatingView style={{height: 18, backgroundColor: '#333'}} rating={9.6} />
                        </View>
                    </View>
                </View>
            </View>
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
                {this._renderMovieItem()}
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
    videoLinearGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50
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
        top: 20,
        left: 24,
        zIndex: 20,
    },
    movieSocialContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 15
    },
    movieContainer: {
        flexDirection: 'row',
    },
    movieThumbContainer: {
        height: 80,
        width: 60
    },
    movieThumb: {
        flex: 1
    },
})

module.exports = MovieDetailScreen;