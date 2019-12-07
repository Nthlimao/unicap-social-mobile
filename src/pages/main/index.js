import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { logout } from '../../providers/auth';

export default Main = () => {
    const { navigate } = useNavigation();

    const logOut = () => {
        if(logout()) {
            navigate('Auth');
        }
    }

    return (
        <View>
            <View>
                <Text>Main</Text>
                <Button title="Logout" onPress={() => logOut()} />
            </View>
        </View>
    )
}