import transitionConfig from './config/transition.config';
import { 
    createStackNavigator, 
    createSwitchNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import Init from './pages/init';
import Login from './pages/login';
import Main from './pages/main';
import Chat from './pages/chat';
import One from './pages/one';
import Two from './pages/two';

const TabStack = createBottomTabNavigator({
    Main: Main,
    Chat: Chat,
    One: One,
    Two: Two,
}, {
    navigationOptions: {
        headerStyle: {
            elevation: 0,
            height: 0, 
        }
    },
    tabBarOptions: {
        showLabel: false,
        style: {
            height: 58,
            borderTopWidth: 0,
            backgroundColor: '#FFFFFF',
        }
    },
    swipeEnabled: true,
    animationEnabled: true
}
);

const AppStack = createStackNavigator({
    Main: TabStack
},{
    transitionConfig,
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