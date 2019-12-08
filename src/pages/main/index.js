import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import { logout } from '../../providers/auth';

import css from '../../helpers/default.css';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='home'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
)

export default Main = () => {
    const { navigate } = useNavigation();

    const logOut = () => {
        if(logout()) {
            navigate('Auth');
        }
    }

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Text style={css.headerTitle}>Página Inicial</Text>
                <Button 
                    type="clear"
                    buttonStyle={{padding: 0}}
                    icon={<Icon type='feather' name="log-out" size={20} color="#FFFFFF"/>} 
                    onPress={() => logOut()} 
                />
            </View>
            <View style={css.content}>
            </View>
        </View>
    )
}

Main.navigationOptions = {
    headerStyle: {
        elevation: 0,
        height: 0,
    },
    tabBarIcon: TabIcon
};