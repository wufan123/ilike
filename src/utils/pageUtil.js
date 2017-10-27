
import Communications from 'react-native-communications';
function callPhone(phone) {
    Communications.phonecall(phone, true)
}

function gotoConfirmOrder(){
      global.navigation.navigate('ConfirmOrder');
}

module.exports = {
    callPhone,
    gotoConfirmOrder
}