
import Communications from 'react-native-communications';
import { NavigationActions } from 'react-navigation'
function callPhone(phone) {
    Communications.phonecall(phone, true)
}

function gotoConfirmOrder() {
    global.navigation.navigate('ConfirmOrder');
}

function navigate(pageName) {
    global.navigation.navigate(pageName);
}

function resetTo(pageName, index) {
    let resetAction = NavigationActions.reset({
        index: index || 0,
        actions: [
            NavigationActions.navigate({ routeName: pageName })
        ]
    })
    global.navigation.dispatch(resetAction)
}

function goBack() {
    global.navigation.goBack(null);
}

module.exports = {
    callPhone,
    gotoConfirmOrder,
    navigate,
    resetTo,
    goBack,
}