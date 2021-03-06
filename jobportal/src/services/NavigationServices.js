// NavigationService.js

import { NavigationActions,StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    console.log('route name ', routeName)
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}
function reset(routeName, params) {
   _navigator.dispatch( StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
    }));
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    reset
};