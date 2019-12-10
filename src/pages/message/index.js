import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, FlatList } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import schemas from '../../services/schemas.graphql';

import css from '../../helpers/default.css';
import styles from './styles.css';

export default Message = ({ navigation }) => {
    const { state: { params: { chat }} } = navigation;
    const { data, loading, error } = useQuery(schemas.GET_MESSAGES, {
        variables: {
            chat: chat._id,
        }
    });

    let msgs = [];

    const renderItem = ({ item }) => {
        return (
            <View>
                <View>
                    <Text>{item.value}</Text>
                    <Text>{item.sender.name}</Text>
                    <Text>{item.created_at}</Text>
                </View>
            </View> 
        )
    }

    if(loading === false && data !== undefined) {
        const { messages } = data;
        msgs = messages;
    }

    return (
        <View style={css.container}>
            <Spinner
                visible={loading}
            />
            <View style={styles.header}>
                <Button 
                    type="clear"
                    buttonStyle={{padding: 0}}
                    icon={<Icon type='feather' name="arrow-left" size={24} color="#FFFFFF"/>} 
                    onPress={() => navigation.goBack()} 
                />
                <Avatar
                    rounded
                    size={40}
                    activeOpacity={0.7}
                    title={chat.initial}
                    containerStyle={styles.avatar}
                    overlayContainerStyle={{backgroundColor: '#c2c2c2'}}
                />
                <Text style={styles.headerTitle}>{chat.name}</Text>
            </View>
            <View style={css.content}>
                <FlatList
                    style={{padding: 15}}
                    data={msgs}
                    keyExtractor={item => item._id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}


Message.navigationOptions = {
    headerLeft: null,
    headerStyle: {
        elevation: 0,
        height: 0,
    },
};