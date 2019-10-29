import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";
import TabStack from './TabStack';
import AuthStack from './AuthStack';

const MainStack = createStackNavigator({
    ...AuthStack,
    TabStack:{screen:TabStack,navigationOptions:{
        header:null
    }}
},{
    // headerMode: "none",
    // initialRouteName: "TabStack"
})

export default createAppContainer(MainStack)