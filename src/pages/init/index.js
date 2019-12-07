import React, { useState, useEffect  } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { getToken } from '../../providers/auth';

export default Init = () => {
    const { navigate } = useNavigation();
    const [ token, setToken ] = useState(undefined);

    useEffect(() => {
        const token = getToken();
        setToken(token);
    }, []);

    if(token !== undefined) {
        if(typeof token === 'string' && token !== null){
            navigate('App');
        } else {
            navigate('Auth');
        }
    }

    return (
        <View>
            <View>
                <Text>Loading...</Text>
            </View>
        </View>
    )
}