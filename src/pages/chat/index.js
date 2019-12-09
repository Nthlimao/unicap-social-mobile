import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Group from '../../components/group';
import schemas from '../../services/schemas.graphql';
import { useNavigation } from 'react-navigation-hooks';

import css from '../../helpers/default.css';

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
    const { data, loading, error, refetch } = useQuery(schemas.GET_SUBSCRIBES);
    const chats = [];

    const handleAdd = () =>{
        navigate('Subscribe');
    }

    if(loading === false && data !== undefined) {
        console.log(data);
    }
    
    return (
        <View style={css.container}>
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
                    renderItem={Group}
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