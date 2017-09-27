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

    _renderMovieTag(tag) {
        return (
            <View style={styles.movieTagView}>
                <Text style={styles.movieTagText}>{tag}</Text>
            </View>
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
                        <Text style={[globalStyle.fontBlack, globalStyle.font20]}>异形</Text>
                        <View style={[globalStyle.row]}>
                            <Text numberOfLines={2} style={[globalStyle.fontBlack, globalStyle.font14]}>主演: <Text style={[globalStyle.fontGray]}>汤姆·斯凯里特，西格妮·韦弗，维罗尼卡·卡维特，哈利·戴恩·斯坦通，约翰·赫特，伊安·霍姆汤姆·斯凯里特，西格妮·韦弗，维罗尼卡·卡维特，哈利·戴恩·斯坦通，约翰·赫特，伊安·霍姆</Text></Text>
                        </View>
                        <View style={[globalStyle.row, globalStyle.alignItemsCenter]}>
                            <Text style={[globalStyle.fontOrange, globalStyle.font18]}>7.6</Text>
                            <RatingView style={{flex:1, marginLeft: 6}} rating={7.6} />
                        </View>
                        <View style={[globalStyle.row, globalStyle.alignItemsCenter]}>
                            {this._renderMovieTag('223人想看')}
                            <View style={styles.movieTagSpace} />
                            {this._renderMovieTag('120分钟')}
                            <View style={styles.movieTagSpace} />
                            {this._renderMovieTag('美国')}
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
        height: 100,
        width: 75
    },
    movieThumb: {
        flex: 1
    },
    movieRightContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    actressContainer: {
        flexDirection: 'row'
    },
    movieTagView: {
        ...globalStyle.alignItemsCenter,
        ...globalStyle.justifyContentCenter,
        borderWidth: 1,
        borderColor: globalStyle.colorPrimary,
        paddingHorizontal: 6,
        borderRadius: 3
    },
    movieTagText: {
        ...globalStyle.font14,
        ...globalStyle.fontColorPrimary,
        lineHeight: 20
    },
    movieTagSpace: {
        width: 10,
    }
})

module.exports = MovieDetailScreen;