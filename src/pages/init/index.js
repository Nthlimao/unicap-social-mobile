import React, { useState, useEffect  } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { getToken } from '../../providers/auth';
import Spinner from 'react-native-loading-spinner-overlay';


export default Init = () => {
    const { navigate } = useNavigation();
    const [ token, setToken ] = useState(undefined);

    useEffect(() => {
        async function getAsync() {
            const token = await getToken();
            setToken(token);
        }

        getAsync();
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
            <Spinner
                overlayColor={'#7c1214'}
                visible={true}
            />
        </View>
    )
}