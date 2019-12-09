import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import schemas from '../../services/schemas.graphql';
// import { useNavigation } from 'react-navigation-hooks';

import css from '../../helpers/default.css';
import styles from './styles.css';

export default Subscribe = () => {
    // const { navigate } = useNavigation();
    const { data, loading, error, refetch } = useQuery(schemas.GET_SUBSCRIBES);
    let chats = [];

    if(loading === false && data !== undefined) {
        console.log(data);
        const { subscribes } = data;
        chats = subscribes;
    }

    const handleSubscribe = (item) => {
        console.log(item);
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