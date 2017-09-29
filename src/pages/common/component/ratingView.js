import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    ImageResizeMode,
} from 'react-native';

class RatingView extends Component {
    constructor(props) {
        super(props);
        this.state= {
            rating: this.props.rating,
            maxRating: 10,
            starWidth: 18,
            starSpace: 4,
            totalStar: 5,
            minWidth: 106,
            minheight: 18,
        };
        this._stars = this._stars.bind(this);
    }

    _stars(rating) {
        rating = rating * 1.0 / (this.state.maxRating/this.state.totalStar);
        var intRating = Math.floor(rating);
        var floatRating = rating - intRating;
        var fullStarCount = intRating;
        var halfStarCount = floatRating>0.5?1:0;
        var emptyStarCount = this.state.totalStar - fullStarCount - halfStarCount;
        var stars = [];
        for (var i = 1; i <= this.state.totalStar; i++) {
            var starImg = null;
            if (i <= fullStarCount) {
                starImg = require('../../../assets/common/star_full.png');
            } else if(i == (fullStarCount + halfStarCount)) {
                starImg = require('../../../assets/common/star_half.png');
            } else {
                starImg = require('../../../assets/common/star_empty.png');
            }
            stars.push(
                <Image key={''+i} source={starImg} style={{width: this.state.starWidth, height: this.state.starWidth}}/>
            )
        }
        return stars;
    }

    render() {
        var width = this.props.style.width;
        if (width===undefined) width=this.state.minWidth;
        var imageHeight = this.props.style.height;
        if (imageHeight===undefined) imageHeight=this.state.minheight;
        var starWidth = (width - (this.state.totalStar-1) * this.state.starSpace) / this.state.totalStar;
        starWidth = starWidth>0?starWidth:18;
        starWidth = starWidth>imageHeight?imageHeight:starWidth;
        this.state.starWidth = starWidth;
        return (
            <View
                style={[this.props.style, styles.container]}>
                {this._stars(this.props.rating)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingImageStyle: {
        width: 18,
        height: 18
    }
})

module.exports = RatingView;