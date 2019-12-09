import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import schemas from '../../services/schemas.graphql';

import css from '../../helpers/default.css';
import styles from './styles.css';

export default Subscribe = () => {
    const [submit, subscription] = useMutation(schemas.SUBSCRIPTION);
    const { data, loading, error } = useQuery(schemas.GET_SUBSCRIBES);
    let chats = [];

    if(loading === false && data !== undefined) {
        const { subscribes } = data;
        chats = subscribes;
    }

    if(subscription.loading === false && subscription.data !== undefined) {
        chats = subscription.data.subscription;
    }

    const handleSubscribe = (item) => {
        submit({ variables: {
            subject: item._id
        } });
    }

    const renderItem = ({ item }) => (
        <View style={styles.subscriber}>
            <View style={styles.infos}>
                <Text style={styles.title}>{item.code}</Text>
                <Text style={styles.subtitle}>{item.name}</Text>
            </View>
            <Button 
                buttonStyle={styles.button}
                icon={<Icon type='feather' name="check" size={20} color="#FFFFFF"/>} 
                onPress={() => handleSubscribe(item)} 
            />
        </View>
    )
    
    return (
        <View style={css.container}>
            <Spinner
                visible={loading || subscription.loading}
            />
            <View style={css.header}>
                <Text style={css.headerTitle}>Inscrever-se</Text>
            </View>
            <View style={css.content}>
                <FlatList
                    style={{padding: 15}}
                    data={chats}
                    keyExtractor={item => item._id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

Subscribe.navigationOptions = {
    headerTintColor: '#FFFFFF',
    headerStyle: {
        backgroundColor: '#7c1214',
        elevation: 0,
    },
};