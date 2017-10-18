/**
 * Created by Administrator on 2017/9/14.
 */
import { QRScannerView } from 'ac-qrcode';
import React, {Component} from 'react';
import {
    ToastAndroid,
    Text,
    AppRegistry, View, StatusBar
} from 'react-native';
import BasePage from "./basePage";
export default class QrCodeScan extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    hidden={true}
                    barStyle={'light-content'}
                />
            < QRScannerView
                hintText={'将二维码放入条形框添加优惠券'}

                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />
            </View>
        )
    }

    _renderTitleBar(){
        return null;
    }

    _renderMenu() {
        return null
    }

    barcodeReceived(e) {
        // ToastAndroid.show('Type: ' + e.type + '\nData: ' + e.data,ToastAndroid.SHORT);
        //console.log(e)
    }
}
