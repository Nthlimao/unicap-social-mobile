import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='award'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
)

export default Two = () => {
    return (
        <View>
            <View>
                <Text>Two</Text>
            </View>
        </View>
    )
}

Two.navigationOptions = {
    tabBarIcon: TabIcon
};