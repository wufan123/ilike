import React, { Component } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';

class ImageViewerScreen extends React.Component {

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

    render() {
        let images = this.props.images;
        try {
            images = this.props.navigation.state.params.images
        } catch (error) {
            
        }
        return (
            <View style={{flex: 1}}>
                {this._renderBackButton()}
                <ImageViewer
                imageUrls={images.map((url)=>{return {url: url};})}
                index={this.props.navigation.state.params.index}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});

ImageViewerScreen.propTypes = {
    ...View.propTypes,
    images: PropTypes.array,
}

module.exports = ImageViewerScreen;

