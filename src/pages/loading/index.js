import React, { useEffect  } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { getSession, setSession } from '../../providers/session';
import schemas from '../../services/schemas.graphql';

export default Init = () => {
    const { navigate } = useNavigation();
    const [submit, { data, loading, error }] = useMutation(schemas.SYNC);

    useEffect(() => {
        async function getAsync() {
            const session = await getSession();
            submit({ variables: {
                session
            } });
        }
        getAsync();
    }, []);

    
    async function setAsync (sync){
        const { session } = sync;
        await setSession(session);
        navigate('Tab')
    }

    if(loading === false && data !== undefined) {
        const { sync } = data;
        setAsync(sync);
    }

    return (
        <View>
            <View>
                <Text>Loading...</Text>
            </View>
        </View>
    )
}