import React, { Component } from 'react';
import {
    View,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';

class ImageViewerScreen extends React.Component {
    render() {
        let images = this.props.images;
        try {
            images = this.props.navigation.state.params.images
        } catch (error) {
            
        }
        return (
            <Modal visible={true} transparent={true}>
                <ImageViewer
                imageUrls={images.map((url)=>{return {url: url};})}
                index={this.props.navigation.state.params.index}/>
            </Modal>
        );
    }
}

ImageViewerScreen.propTypes = {
    ...View.propTypes,
    images: PropTypes.array,
}

module.exports = ImageViewerScreen;

