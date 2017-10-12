import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Button, ImageButton } from '../common/component'
import Header from '../common/header';
import theme from '../../style/index';
import ImagePicker from 'react-native-image-crop-picker';

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                underlineColorAndroid="transparent"
                {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
                editable={true}
                maxLength={40}
            />
        );
    }
}


class HelpbackScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoList: []
        }
    }

    render() {
        return (
            <View style={styles.page}>
                <Header title={'意见反馈'} rightTxt={'记录'} rightClick={this.rightClick}/>
                <View style={styles.view}>
                    <UselessTextInput keyboardType='default' style={{textAlignVertical: 'top'}}
                                      placeholder='恶心自己成全别人，来吐槽吧~' multiline={true} numberOfLines={8}/>
                    <View style={styles.photoList}>
                        {this.getPhotoItem()}
                        <TouchableOpacity onPress={() => {
                            ImagePicker.openPicker({
                                mediaType: 'photo',
                            }).then(image => {
                                this.setState((preSate) => {
                                    preSate.photoList.push(image)
                                    return preSate
                                })
                            });
                        }}>
                            {this.state.photoList.length < 4 ?
                                <Image source={require('../../assets/me/ff.png')} style={styles.photoItem}
                                       resizeMode='stretch'/> : null}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.view, {paddingVertical: 0}]}>
                    <TextInput underlineColorAndroid="transparent" placeholder='请留下您的手机号或者QQ号，以便答复'/>
                </View>
                <Button buttonStyle={styles.button} text={'提交'}/>
                <Text style={[theme.fontColorPrimary, {textAlign: 'center'}]}>
                    <Image source={require('../../assets/me/phone02.png')} style={{width: 30, height: 30}}
                           resizeMode='contain'/> 4000-125-000</Text>
            </View>
        )
    }

    getPhotoItem() {
        return this.state.photoList.map((item, index) => {
            console.log(item)
            return (<View key={index}>
                <Image  style={styles.photoItem} source={{uri: item.path}}/>
                <TouchableOpacity style={styles.photoCloseIcon} onPress={()=>{
                        this.setState((preState)=>{
                            preState.photoList.splice(index,1)
                            return preState
                        })
                }}>
                    <Image style={{height:20,width:20}}  resizeMode='stretch' source={require('../../assets/me/fbClose.png')} />
                </TouchableOpacity>
            </View>)
        })

    }
}

const styles = StyleSheet.create({
    photoCloseIcon: {
        position:'absolute',
        top:-10,
        right:5
    },
    photoItem: {
        height: 60,
        width: 60,
        marginRight: 10
    },
    photoList: {
        flexDirection: 'row'
    },
    view: {
        backgroundColor: '#ffffff',
        marginBottom: theme.itemMargin,
        paddingHorizontal: theme.pagePadding,
        paddingVertical: theme.itemMargin,
    },
    button: {
        margin: theme.pagePadding,
        marginRight: theme.pagePadding,
        backgroundColor: theme.colorPrimary,
        borderRadius: theme.borderRadius,
    }
})

module.exports = HelpbackScreen;