import {
    View
} from 'react-native';
import Video from 'react-native-video'
import React, {Component} from 'react';
import VideoPlayer from 'react-native-video-controls';
export default class VideoView extends Component {
    render() {
        let videoUrl = this.props.navigation.state.params.videoUrl;
        return (
            <View style={{flex: 1}}>
                {/*<VideoPlayer
                    repeat
                    resizeMode='cover'
                    source={{uri:'http://7xk8vp.com1.z0.glb.clouddn.com/WhatsNewFeature_03.mp4', mainVer: 1, patchVer: 0}}
                    style={{flex: 1}}
                />*/}
                <VideoPlayer
                    source={{ uri: videoUrl }}
                    onBack={()=>this.props.navigation.goBack()}
                />
            </View>
        )
    }
}
