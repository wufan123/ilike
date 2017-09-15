/**
 * Created by Administrator on 2017/9/14.
 */
import { QRScannerView } from 'ac-qrcode';
import React, {Component} from 'react';
import {
    ToastAndroid,
    Text,
    AppRegistry
} from 'react-native';
export default class QrCodeScan extends Component {
    render() {
        return (
            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >Here is title bar</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >Here is bottom menu</Text>
        )
    }

    barcodeReceived(e) {
        // ToastAndroid.show('Type: ' + e.type + '\nData: ' + e.data,ToastAndroid.SHORT);
        //console.log(e)
    }
}
