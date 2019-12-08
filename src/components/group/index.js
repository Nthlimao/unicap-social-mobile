import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

import styles from './styles.css';

const Group = ({ item }) => {
    return (
        <View style={styles.group}>
            <Avatar
                rounded
                size={60}
                activeOpacity={0.7}
                title={item.sigla}
                titleStyle={styles.avatar}
                overlayContainerStyle={{backgroundColor: '#c2c2c2'}}
                onPress={() => console.log("Works!")}
            />
            <View style={styles.header}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.description}</Text>
            </View>
            <View style={styles.options}>
                <Text style={styles.date}>08/12/2019</Text>
                <Badge badgeStyle={styles.badge} value="1"/>
            </View>
        </View>
    )
}

export default Group;