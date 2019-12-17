import React, { useEffect , useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

// @import elements
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

// @import services
import { getSession, setSession } from '../../providers/session';
import { setGrade, getGrade } from '../../providers/schedule';
import { GET_SCHEDULE } from '../../services/schemas.graphql';

// @import styles
import css from '../../helpers/default.css';
import styles from './styles.css';

const TabIcon = (props) => (
    <Icon 
        type='feather'
        name='calendar'
        size={20}
        color={props.focused ? '#7c1214' : '#c2c2c2'}
    />
)


export default Schedule = () => {
    const [ storage, setStorage ] = useState([])
    const [submit, { data, loading, error }] = useMutation(GET_SCHEDULE);

    useEffect(() => {
        async function getAsync() {
            const grade = await getGrade();
            
            if(!grade) {
                const session = await getSession();
                submit({ variables: {
                    session
                } });
            } else {
                setStorage(grade);
            }
        }
        getAsync();
    }, []);


    async function setAsync(schedule) {
        const { schedules, session } = schedule;
        setStorage(schedules);
        await setSession(session);
        await setGrade(schedules);
    }

    if(loading === false && data !== undefined) {
        const { schedule } = data;
        setAsync(schedule);
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.schedule}>
                <Text style={styles.scheduleTitle}>{item.title}</Text>
                {item.grade.map((current, index) => {
                    return (
                        <View key={index + 'c'} style={styles.class}>
                            <Text style={styles.subjectTitle}>{current.subject.name}</Text>
                            <Text style={styles.subjectSchedule}>{current.schedule}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Text style={css.headerTitle}>Disciplinas </Text>
            </View>
            <View style={css.content}>
                <FlatList
                    style={{padding: 15}}
                    data={storage}
                    keyExtractor={(item, index) => index+'flatlist'}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

Schedule.navigationOptions = {
    tabBarIcon: TabIcon
};