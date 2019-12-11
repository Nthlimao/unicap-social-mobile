import React, { useState, useEffect } from 'react';
import { getId } from '../../providers/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { View, Text, FlatList, TextInput } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import schemas from '../../services/schemas.graphql';

import css from '../../helpers/default.css';
import styles from './styles.css';

export default Message = ({ navigation }) => {
    const { state: { params: { chat }} } = navigation;
    const [ variables, setVariables ] = useState({ chat: chat._id, message: '' });  
    const [ id, setId ] = useState(undefined);
    const [submit, sent] = useMutation(schemas.SEND);
    const { data, loading, error } = useQuery(schemas.GET_MESSAGES, {
        variables: {
            chat: chat._id,
        }
    });

    useEffect(() => {
        async function getAsync() {
            const id = await getId();
            setId(id);
        }

        getAsync();
    }, []);

    const handleChange = (value, target) => {
        setVariables(variables => ({ ...variables, [target]: value }));
    }

    const handleSubmit = () => {
        submit({ variables });
    }

    let msgs = [];

    const renderItem = ({ item }) => {
        const isMe = id === item.sender._id;

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
        )
    }

    if(loading === false && data !== undefined && id !== undefined) {
        const { messages } = data;
        msgs = messages;
    }

    if(sent.loading === false && sent.data !== undefined && id !== undefined) {
        handleChange('', 'message');
        const { messages } = sent.data;
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
    )
}


Message.navigationOptions = {
    headerLeft: null,
    headerStyle: {
        elevation: 0,
        height: 0,
    },
};