import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { login, isLoggedIn } from '../../providers/auth';

export default Login = () => {
    const { navigate } = useNavigation();

    const loginIn = () => {
        const data = {
            token: 'token_aleatorio',
            student: {
                name: 'Nathalia Lima'
            }
        };
        
        login(data);
        if(isLoggedIn()){
            navigate('App');
        }
    }

    return (
        <View>
            <View>
                <Text>Login</Text>
                <Button title="Login" onPress={() => loginIn()} />
            </View>
        </View>
    )
}