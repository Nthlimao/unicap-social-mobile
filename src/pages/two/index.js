import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

import { logout } from '../../providers/auth';

// @import styles
import css from '../../helpers/default.css';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='settings'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
)

export default Two = () => {  
    const { navigate } = useNavigation();  
    const list = [
        {
          title: 'Sincronizar',
          icon: 'repeat',
          onPress: () => navigate('Loading'),
        },
        {
          title: 'Informações',
          icon: 'github'
        },
    ]

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Text style={css.headerTitle}>Configurações</Text>
            </View>
            <View style={css.content}>
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon, type:'feather' }}
                        bottomDivider
                        chevron
                        onPress={item.onPress ? item.onPress : null}
                    />
                    ))
                }
            </View>
        </View>
    )
}

Two.navigationOptions = {
    tabBarIcon: TabIcon
};