import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, PanResponder } from 'react-native';
export default class ZoomImage extends Component {
    constructor(props) {
        super(props)
        this.initDistend,
            this.state = {
                width: 300,
                height: 300,
                point1x: 0,
                point1y: 0,
                point2x: 0,
                point2y: 0,
                scaleNumber: 1,

            }

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.onStartShouldSetPanResponder.bind(this),
            onStartShouldSetPanResponderCapture: this.onStartShouldSetPanResponderCapture.bind(this),
            onMoveShouldSetPanResponder: this.onMoveShouldSetPanResponder.bind(this),
            onMoveShouldSetPanResponderCapture: this.onMoveShouldSetPanResponderCapture.bind(this),

            onPanResponderGrant: () => { },
            onPanResponderStart: this.onPanResponderStart.bind(this),
            onPanResponderMove: this.onPanResponderMove.bind(this),
            onPanResponderTerminate: this.onPanResponderRelease.bind(this),
            onPanResponderRelease: this.onPanResponderRelease.bind(this),

        });

    }


    // 要求成为响应者：
    onStartShouldSetPanResponder(evt, gestureState) {
        if (gestureState.numberActiveTouches == 2)   //两点手势则处理
        {
            console.log("gestureStatetttttttttttttttt==================================")
            return true;
        }
        return false
    }
    onStartShouldSetPanResponderCapture(evt, gestureState) {
        if (gestureState.numberActiveTouches == 2)   //两点手势则处理
        {
            return true;
        }
        return false;
    }
    onMoveShouldSetPanResponder(evt, gestureState) {
        if (gestureState.numberActiveTouches == 2)   //两点手势则处理
        {
            return true;
        }
        return false;
    }
    onMoveShouldSetPanResponderCapture(evt, gestureState) {
        if (gestureState.numberActiveTouches == 2)   //两点手势则处理
        {
            return true;
        }
        return false;
    }

    onPanResponderGrant(evt, gestureState) {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
        console.log("要开始缩放啦==================================")
        // gestureState.{x,y} 现在会被设置为0
    }
    onPanResponderStart(event, gestureState) {
        if (gestureState.numberActiveTouches == 2)   //两点手势
        {
            //这里计算初始的距离 √(x1-x2)^2+(y1-y2)^2
            let distend = Math.sqrt(
                Math.pow(event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX, 2) +
                Math.pow(event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY, 2)
            )
            this.initDistend = distend;

            this.setState({
                point1x: event.nativeEvent.touches[0].pageX,
                point1y: event.nativeEvent.touches[0].pageY,
                point2x: event.nativeEvent.touches[1].pageX,
                point2y: event.nativeEvent.touches[1].pageY,
            })
        }

    }
    onPanResponderMove(event, gestureState) {
        if (gestureState.numberActiveTouches == 2)   //两点手势
        {
            let distend = Math.sqrt(
                Math.pow(event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX, 2) +
                Math.pow(event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY, 2)
            )
            let scaleNumber = distend / this.initDistend
            this.setState({
                point1x: event.nativeEvent.touches[0].pageX,
                point1y: event.nativeEvent.touches[0].pageY,
                point2x: event.nativeEvent.touches[1].pageX,
                point2y: event.nativeEvent.touches[1].pageY,
                scaleNumber: scaleNumber,

            }) 
        }
    }

    onPanResponderTerminationRequest(evt, gestureState) {
        return true
    }


    onPanResponderRelease(evt, gestureState) {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
    }

    onPanResponderTerminate(evt, gestureState) {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
    }

    onShouldBlockNativeResponder(evt, gestureState) {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true; 
    }

    render() {
        return (
            <View style={{ height: 200, width: '100%' }} {...this.panResponder.panHandlers} >
                <ScrollView style={{ width: '100%' }}>
                    <ScrollView style={{ width: '100%' }} horizontal={true} >
                        <Image 
                            style={{ width: this.state.width * this.state.scaleNumber, height: this.state.height * this.state.scaleNumber }}
                            source={require('../../../assets/tabs/icon_me_s.png')}
                        />
                    </ScrollView>
                </ScrollView > 
            </View>
        );
    }
}

const styles = StyleSheet.create({
});