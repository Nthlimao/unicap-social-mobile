import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
// import { useNavigation } from 'react-navigation-hooks';

import css from '../../helpers/default.css';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='message-square'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
)

export default Chat = () => {
    // const { navigate } = useNavigation();

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Text style={css.headerTitle}>Mensagens</Text>
            </View>
            <View style={css.content}>
            </View>
        </View>
    )
}

Chat.navigationOptions = {
    headerStyle: {
        elevation: 0,
        height: 0,
    },
    tabBarIcon: TabIcon
};