import React from "react";
import {LandingScreen} from "../containers/";
//Auth Stack
const LandingStack = {
    LandingScreen: {
        screen: LandingScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    }
}

export default LandingStack