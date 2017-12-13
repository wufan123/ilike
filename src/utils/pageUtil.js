
import Communications from 'react-native-communications';
import { NavigationActions } from 'react-navigation'
function callPhone(phone) {
    Communications.phonecall(phone, true)
}

function gotoConfirmOrder() {
    global.navigation.navigate('ConfirmOrder');
}

function navigate(pageName, params) {
    global.navigation.navigate(pageName, params);
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

function getParams(props) {
    return props.navigation.state.params
}

module.exports = {
    callPhone,
    gotoConfirmOrder,
    navigate,
    resetTo,
    goBack,
    getParams
}