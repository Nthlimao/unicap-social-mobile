import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon, Avatar, Badge } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import Spinner from 'react-native-loading-spinner-overlay';
import schemas from '../../services/schemas.graphql';

import css from '../../helpers/default.css';
import styles from './styles.css';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='message-square'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
);

export default Chat = () => {
    const { navigate } = useNavigation();
    const { data, loading, error, refetch } = useQuery(schemas.GET_CHATS);
    let chats = [];

    const handleAdd = () =>{
        navigate('Subscribe');
    }

    const handleMessage = (item) => {
        console.log('press')
        navigate('Message', { chat: item });
    }

    if(loading === false && data !== undefined) {
        const { subjects } = data;
        chats = subjects;
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.group} onPress={() => handleMessage(item)}>
                <Avatar
                    rounded
                    size={55}
                    activeOpacity={0.7}
                    title={item.initial}
                    titleStyle={styles.avatar}
                    overlayContainerStyle={{backgroundColor: '#c2c2c2'}}
                />
                <View style={styles.header}>
                    <Text style={styles.title}>{item.name}</Text>
                    {item.message &&
                        <Text style={styles.subtitle}>{item.message.sender.name}: {item.message.value}</Text>
                    }
                </View>
                <View style={styles.options}>
                    {item.message &&
                        <Text style={styles.date}>{item.message.created_at}</Text>
                    }
                    {/* <Badge badgeStyle={styles.badge} value="1"/> */}
                </View>
            </TouchableOpacity> 
        )
    }
    
    return (
        <View style={css.container}>
            <Spinner
                visible={loading}
            />
            <View style={css.header}>
                <Text style={css.headerTitle}>Mensagens</Text>
                <Button 
                    type="clear"
                    buttonStyle={{padding: 0}}
                    icon={<Icon type='feather' name="plus-circle" size={20} color="#FFFFFF"/>} 
                    onPress={() => handleAdd()} 
                />
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

Chat.navigationOptions = {
    headerStyle: {
        elevation: 0,
        height: 0,
    },
    tabBarIcon: TabIcon
};