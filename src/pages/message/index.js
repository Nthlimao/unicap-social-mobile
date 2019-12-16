import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';

// @import elements
import { View, Text, TextInput, FlatList } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

// @import services
import { GET_MESSAGES, SET_MESSAGE, CHAT_CHANNEL } from '../../services/schemas.graphql';
import { getId } from '../../providers/auth';

// @import styles
import css from '../../helpers/default.css';
import styles from './styles.css';

export default Message = ({ navigation }) => {
    let list = []
    // @get navigation
    const { state: { params: { chat }} } = navigation;
    
    // @use states
    const [ variables, setVariables ] = useState({ chat: chat._id, message: '' });
    const [ storage, setStorage ] = useState({});
    
    // @use graphql calls
    const { data, loading, error } = useQuery(GET_MESSAGES, { variables: { chat: chat._id }});
    list = data?.messages || [];

    const subscription = useSubscription(CHAT_CHANNEL, {
        onSubscriptionData({ subscriptionData }) {
            const { data: { messageSent } } = subscriptionData;
            list.push(messageSent);
        }
    });
    const [ submit ] = useMutation(SET_MESSAGE);



    useEffect(() => {
        async function getAsync() {
            const id = await getId();
            setStorage(storage => ({ ...storage, id }));
        }

        getAsync();
    }, []);
    
    const handleChange = (value, target) => {
        setVariables(variables => ({ ...variables, [target]: value }));
    }

    const handleSubmit = () => {
        submit({ variables });
        setVariables(variables => ({ ...variables, ['message']: '' }));
    }

    const renderItem = ({ item }) => {
        const isMe = storage.id === item.sender.id;

        return (
            <View style={styles.wrap}>
                {!isMe &&
                    <Text style={styles.sender}>{((item.sender.name).split(" "))[0]}</Text>
                }
                <View style={isMe ? styles.messageME : styles.message}>
                    <Text style={styles.messageText}>{item.value}</Text>
                    <Text style={styles.date}>{item.created_at}</Text>
                </View>
            </View> 
        );
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
                    data={list} 
                    style={{padding: 15}} 
                    renderItem={renderItem}
                    keyExtractor={item => item.id} 
                />
            </View>
            <View style={css.footer}>
                <View style={styles.footerSend}>
                    <TextInput
                        style={styles.input}
                        value={variables.message}
                        placeholder="Digite uma mensagem..."                                
                        onChangeText={(text) => handleChange(text, 'message')}
                    />
                    <Button 
                        type="clear"
                        buttonStyle={styles.btn}
                        containerStyle={{justifyContent: 'center', alignItems: 'center' }}
                        icon={<Icon type='feather' name="send" size={18} color="#FFFFFF" containerStyle={{ marginRight: 2, marginTop: 1}} />} 
                        onPress={() => handleSubmit()} 
                    />
                </View>
            </View>
        </View>
    );

}

Message.navigationOptions = {
    headerLeft: null,
    headerStyle: {
        elevation: 0,
        height: 0,
    },
};