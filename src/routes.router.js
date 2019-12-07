import transitionConfig from './config/transition.config';
import { 
    createStackNavigator, 
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import Init from './pages/init';
import Login from './pages/login';
import Main from './pages/main';

const AppStack = createStackNavigator({
    Main
},{
    transitionConfig
});

const AuthStack = createStackNavigator({
    Login
},{
    transitionConfig
});

const Switch = createSwitchNavigator({
    Init, 
    App: AppStack,
    Auth: AuthStack
},{
    initialRouteName: 'Init'
});

export default createAppContainer(Switch);