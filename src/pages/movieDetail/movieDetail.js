import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    Share,
    Modal
} from 'react-native';
import globalStyle from '../../style/index';
import LinearGradient from 'react-native-linear-gradient';
import RatingView from '../common/component/ratingView';
import RefreshScrollView, { STATE_NORMAL, STATE_LOADING, STATE_NO_MORE } from '../common/pull/RefreshScrollView';
import ImageViewer from 'react-native-image-zoom-viewer';
import CFlatList from '../common/component/cFlatList';
import {Button} from "../common/component/index";

const { width, height } = Dimensions.get('window')

class MovieDetailScreen extends Component {

    constructor(props) {
        super(props);
        this._renderMovieItem = this._renderMovieItem.bind(this);
        this.state = {
            movieThumbs: [
                'http://new.huansixi.com/data/upload/ueditor/20170222/58ad7352007ba.jpg',
                'http://dingyue.nosdn.127.net/6SJLUojjBd10Hk7kayfVvv5UFdBdga=q9i650jPTcm=Pp1475810505915.jpg',
                'https://www.zhaiiker.com/wp-content/uploads/2017/04/34017629012_226f996dca_b.jpg',
                'https://www.zhaiiker.com/wp-content/uploads/2017/05/p619787.jpg'
            ],
            commentList: [
                { nickname: 'zmax', comment: 'I ran the code but there\'s an error ', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                {
                    nickname: 'zmax',
                    comment: 'Oh sorry. I just clicked the "Run code snippet" button above and the result showed an error. But I think it\'s nothing to do with your code. Sorry.'
                },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },

                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },

                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },

                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },
                { nickname: 'zmax', comment: 'and whats the error?', },

            ],
            movieBriefToggle: false,
            movieLiked: false,
            presentMovieThumbs: false,
            videoUrl: 'http://hd.yinyuetai.com/uploads/videos/common/C9330152A4DFC7FB2FBC3B6070E67899.flv?sc\u003dbac17f82edd35935\u0026br\u003d1105\u0026vid\u003d2491056\u0026aid\u003d201\u0026area\u003dHT\u0026vst\u003d4',
            isLoadingMoreComments: STATE_NORMAL,
        };
        this._rendMovieBrief = this._rendMovieBrief.bind(this);
        this._rendScrollThumbItem = this._rendScrollThumbItem.bind(this);
    }

    _renderBackButton() {
        return (
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => this.props.navigation.goBack()}
            >
                <Image
                    style={{ width: 18, height: 18 }}
                    source={require('../../assets/common/back.png')}
                />
            </TouchableOpacity>
        )
    }

    playVideo = () => {
        global.navigation.navigate('VideoView', {
            videoUrl: this.state.videoUrl,
        });
    }

    _renderVideoView() {
        return (
            <TouchableOpacity
                onPress={this.playVideo}
            >
                <View style={styles.videoContainer}>
                    <ImageBackground
                        style={styles.videoImage}
                        source={{ uri: 'https://www.zhaiiker.com/wp-content/uploads/2017/04/33332515934_608bd7585d_b.jpg' }}>
                        <Image
                            style={styles.playImage}
                            source={require('../../assets/common/icon_play_more.png')} />
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

    _renderSocialItem(img, title, action) {
        return (
            <TouchableOpacity
                onPress={() => action()}
            >
                <View style={styles.socialItem}>
                    <Image style={styles.socialImg} source={img} />
                    <Text style={styles.socialTitle}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _likeAction() {
        this.setState({
            movieLiked: !this.state.movieLiked
        });
    }

    shareMovieAction = () => {
        Share.share({
            title: 'hello',
            url: 'https://www.zhaiiker.com/wp-content/uploads/2017/04/33332515934_608bd7585d_b.jpg',
            message: 'go to watch movie'
        });
    }

    writeCommentAction = () => {
        global.navigation.navigate('WriteComment');
    }

    _renderMovieItem() {
        return (
            <View style={styles.movieSocialContainer}>
                <View style={styles.movieContainer}>
                    <View style={styles.movieThumbContainer}>
                        <Image style={styles.movieThumb}
                            source={{ uri: 'http://img5.mtime.cn/pi/2017/03/23/233340.20916876_1000X1000.jpg' }} />
                    </View>
                    <View style={styles.movieRightContainer}>
                        <Text style={[globalStyle.fontBlack, globalStyle.font20]}>异形</Text>
                        <View style={[globalStyle.row]}>
                            <Text numberOfLines={2} style={[globalStyle.fontBlack, globalStyle.font14]}>主演: <Text
                                style={[globalStyle.fontGray]}>汤姆·斯凯里特，西格妮·韦弗，维罗尼卡·卡维特，哈利·戴恩·斯坦通，约翰·赫特，伊安·霍姆汤姆·斯凯里特，西格妮·韦弗，维罗尼卡·卡维特，哈利·戴恩·斯坦通，约翰·赫特，伊安·霍姆</Text></Text>
                        </View>
                        <View style={[globalStyle.row, globalStyle.alignItemsCenter]}>
                            <Text style={[globalStyle.fontOrange, globalStyle.font18]}>7.6</Text>
                            <RatingView style={{ flex: 1, marginLeft: 6 }} rating={7.6} disabled={true} />
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
                <View style={[globalStyle.lineSeperator, { marginTop: 8 }]} />
                <View style={styles.socialContainer}>
                    {this._renderSocialItem(this.state.movieLiked ? require('../../assets/home/icon_collect.png') : require('../../assets/home/icon_uncollect.png'), this.state.movieLiked ? '已关注' : '关注', this._likeAction.bind(this))}
                    {this._renderSocialItem(require('../../assets/common/share.png'), '分享', this.shareMovieAction)}
                    {this._renderSocialItem(require('../../assets/common/write_comment.png'), '写短评', this.writeCommentAction)}
                </View>
            </View>
        )
    }

    _rendScrollThumbItem({ item, index }) {
        let imgWidth = width / 2 - 23;
        return (
            <View style={globalStyle.row}>
                <TouchableOpacity
                    onPress={() => {
                        global.navigation.navigate('ImageViewer', {
                            images: this.state.movieThumbs,
                            index: index
                        })
                    }}
                >
                    <Image resizeMode={'cover'} style={{ width: imgWidth, height: imgWidth * 0.75, overflow: 'hidden' }}
                        source={{ uri: item }} />
                </TouchableOpacity>
                {index !== (this.state.movieThumbs.length - 1) ? this._rendThumbSpace() : null}
            </View>
        );
    }

    _rendThumbSpace = () => {
        return (
            <View style={{ width: 15 }} />
        )
    }

    _rendSectionSeparate() {
        return (
            <View style={styles.sectionSeparate} />
        )
    }

    toggleMovieBrief() {
        this.setState({
            movieBriefToggle: !this.state.movieBriefToggle
        });
    }

    _rendMovieBrief() {
        return (
            <View style={styles.movieBriefScrollThumbsContainer}>
                <View style={styles.movieBreifContainer}>
                    <Text style={[globalStyle.fontBlack, globalStyle.font20]}>剧情简介</Text>
                    <Text
                        numberOfLines={this.state.movieBriefToggle ? 0 : 3}
                        style={[globalStyle.fontGray, globalStyle.font16, { marginTop: 15, lineHeight: 20 }]}>
                        星际航船
                        “诺史莫”号是一艘载有7名船员的大型商业运输船。它正带着大量的矿石返回地球。中途时处在休眠状态的船员被主电脑唤醒,原来飞船接收到一组信号,根据接到的指令,他们必须改变航行,追查事情原由,适当采取援救活动。信号是由一个原始星球上发出的,那里的大气无法供生物生存。派到地面的分队成员发现了一艘航船残骸,船员早已死亡,成为化石。但在底舱却发现了许多类似虫卵的大圆球,它们被一层射线保护住,似乎还有生命活动。
                        而此时在母船上的第三指挥官蕾普莉中尉却已破译出信号,那并不是求救而表示一种警告,但已来不及了。卵中的生物袭击了一名队员,破坏了他的防护服,并停留在人的脸上,船上的科学家阿休试图切开它,不料它流出的血竟是一种可怕的强腐蚀酸液。正在人们一筹莫展时,一天后,它却突然死了,体内的酸液被中和，而外壳却逐渐硅化成一个坚不可破的装甲。好景不长,更糟的事发生了。原来这种外星异形生物死了根本不是什么意外，而是因为它把卵注入到了这名队员的食道内，异形卵在里面长成后杀死寄主破体而出。面对这种可怕的生物,船员开始分散去找它并消灭它,不料它却已长成一个巨大的异形怪物。船员一个个地被它吞吃掉,而蕾普莉却发现主电脑有问题,它被输入了一些奇怪的指令。
                        原来这次航行是公司预谋的,目的是带回外星生物作研究,并以牺牲全体船员的代价。艾什正是派来执行任务的人造人。蕾普莉设法杀死了艾什,并决定弃船以毁灭异形。就在穿梭机离开母船后, 自毁程序启动,
                        然而异形却已经在穿梭机上,蕾普莉用排物管道,将异形放逐到太空,然后进入了休眠。
                    </Text>
                    <TouchableOpacity
                        style={[globalStyle.alignItemsCenter, { height: 20, marginTop: 10 }]}
                        onPress={this.toggleMovieBrief.bind(this)}
                    >
                        <Image resizeMode={'stretch'} style={styles.extendImg}
                            source={this.state.movieBriefToggle ? require('../../assets/common/icon_movie_unexp.png') : require('../../assets/common/icon_movie_exp.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[globalStyle.lineSeperator, { marginVertical: 15 }]} />
                <FlatList
                    style={styles.scrollThumbContainer}
                    data={this.state.movieThumbs}
                    renderItem={this._rendScrollThumbItem}
                    horizontal={true}
                    keyExtractor={(item, index) => ('' + index)}
                />
            </View>
        )
    }

    goToReplyList = () => {
        global.navigation.navigate('CommentReplyList');
    }

    _renderCommentCell({ item, index }) {
        return (
            <TouchableOpacity
                onPress={this.goToReplyList}
            >
                <View
                    style={[styles.commentCell]}
                >
                    <View style={styles.commentCellUpContainer}>
                        <View style={[globalStyle.row, { alignItems: 'center' }]}>
                            <Image style={styles.avatar} source={require('../../assets/common/default_avatar.png')} />
                            <View style={{ 'width': 6 }} />
                            <Text style={[globalStyle.fontGray, globalStyle.font14]}>zmax</Text>
                            <View style={{ 'width': 6 }} />
                            <Image style={styles.genderImg} source={require('../../assets/common/girl.png')} />
                        </View>
                        <Text style={[globalStyle.fontGray, globalStyle.font11]}>30min ago</Text>
                    </View>
                    <View
                        style={styles.commentCellMiddleContainer}
                    >
                        <Text
                            numberOfLines={3}
                            style={[globalStyle.fontBlack, globalStyle.font14]}
                        >
                            {item.comment}
                        </Text>
                    </View>
                    <View
                        style={styles.commentCellBottomContainer}
                    >
                        <Image
                            style={{ width: 18, height: 16 }}
                            source={require('../../assets/common/movie_comments.png')}
                            resizeMode={"cover"}
                        />
                        <View style={{ width: 6 }} />
                        <Text style={[globalStyle.fontGray, globalStyle.font12]}>20</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    loadMoreComments = () => {
        this.setState({
            isLoadingMoreComments: STATE_LOADING,
        }, () => {
            setTimeout(() => {
                this.setState({
                    isLoadingMoreComments: STATE_NO_MORE,
                    commentList: this.state.commentList.concat(this.state.commentList)
                })
            }, 2000);
        });
    }

    _renderCommentList() {
        return (
            <FlatList
                data={this.state.commentList}
                renderItem={this._renderCommentCell.bind(this)}
                ItemSeparatorComponent={() => <View style={[globalStyle.lineSeperator]} />}
                keyExtractor={(item, index) => ('' + index)}
                extraData={this.state}
            />
        )
    }

    _gotoChooseSeat(item) {
        global.navigation.navigate('ChooseSeat');
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <StatusBar
                    hidden={true}
                />
                {this._renderBackButton()}
                <RefreshScrollView
                    style={styles.screenContainer}
                    loadMore={this.loadMoreComments}
                    footerViewState={this.state.isLoadingMoreComments}
                >
                    {this._renderVideoView.bind(this)()}
                    {this._renderMovieItem()}
                    {this._rendSectionSeparate()}
                    {this._rendMovieBrief()}
                    {this._rendSectionSeparate()}
                    {this._renderCommentList()}
                    <View style={{ height: 8 }} />
                </RefreshScrollView>
                <Button  text={'选座购票'} onPress={() => {
                    this._gotoChooseSeat.bind()()
                }}/>
                {/*<TouchableOpacity
                    onPress={() => {
                        this._gotoChooseSeat.bind()()
                    }}
                    style={styles.buyButton}
                >
                    <Text style={[globalStyle.fontWhite, globalStyle.font18]}>选座购票</Text>
                </TouchableOpacity>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: globalStyle.pageBackground,
    },
    videoContainer: {
        aspectRatio: 16 / 9,
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 20,
        left: 24,
        zIndex: 20,
    },
    movieSocialContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 15,
        backgroundColor: globalStyle.backgroundColor
    },
    movieContainer: {
        flexDirection: 'row',
    },
    movieThumbContainer: {
        height: 103,
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
        lineHeight: 24,
        textAlign: 'center'
    },
    movieTagSpace: {
        width: 10,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    socialItem: {
        alignItems: 'center',
        height: 46,
        justifyContent: 'space-between'
    },
    socialImg: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    socialTitle: {
        ...globalStyle.font16,
        ...globalStyle.fontBlack
    },
    movieBriefScrollThumbsContainer: {
        backgroundColor: globalStyle.backgroundColor,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    sectionSeparate: {
        height: 10,
    },
    extendImg: {
        width: 24,
        height: 12
    },
    commentCell: {
        padding: 15,
        backgroundColor: 'white',
    },
    commentCellUpContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    genderImg: {
        width: 14,
        height: 14,
        resizeMode: 'cover'
    },
    commentCellMiddleContainer: {
        marginTop: 8,
        marginLeft: 38,
    },
    commentCellBottomContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8
    },
    buyButton: {
        ...globalStyle.buttonOrange,
        height: 44,
    }
})

module.exports = MovieDetailScreen;