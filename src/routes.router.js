import transitionConfig from './config/transition.config';
import { 
    createStackNavigator, 
    createSwitchNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import Init from './pages/init';
import Login from './pages/login';
import Loading from './pages/loading';
import Main from './pages/main';
import Chat from './pages/chat';
import Subscribe from './pages/subscribe';
import Message from './pages/message';
import Schedule from './pages/schedule';
import Two from './pages/two';

const TabStack = createBottomTabNavigator({
    Main: Main,
    Chat: Chat,
    Schedule: Schedule,
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
    Tab: TabStack,
    Subscribe,
    Message
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
    Loading,
    App: AppStack,
    Auth: AuthStack
},{
    initialRouteName: 'Init'
});

export default createAppContainer(Switch);