import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Group from '../../components/group';
// import { useNavigation } from 'react-navigation-hooks';

import css from '../../helpers/default.css';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='message-square'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
);

const data = [
    { _id: 1, sigla: 'M1',title: 'MATERIA 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { _id: 2, sigla: 'M2',title: 'MATERIA 2', description: 'Aenean nec lectus et sapien tincidunt pretium.'},
    { _id: 3, sigla: 'M3',title: 'MATERIA 3', description: 'Vestibulum feugiat ex quis arcu scelerisque dignissim'},
];

export default Chat = () => {
    // const { navigate } = useNavigation();

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Text style={css.headerTitle}>Mensagens</Text>
                <Button 
                    type="clear"
                    buttonStyle={{padding: 0}}
                    icon={<Icon type='feather' name="plus-circle" size={20} color="#FFFFFF"/>} 
                     
                />
            </View>
            <View style={css.content}>
                <FlatList
                    style={{padding: 15}}
                    data={data}
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