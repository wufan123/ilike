import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import {Button} from '../common/component'
import Header from '../common/header';
import theme from '../../style/index';
import ImagePicker from 'react-native-image-crop-picker';

let base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
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