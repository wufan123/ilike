
import Communications from 'react-native-communications';
function callPhone(phone) {
    Communications.phonecall(phone, true)
}

module.exports = {
    callPhone
}