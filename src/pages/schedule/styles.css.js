import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    schedule: {
        marginBottom: 15,
    },
    scheduleTitle: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Barlow-Bold',
        marginBottom: 10,
        color: '#c2c2c2',
    },
    class: {
        padding: 15,
        backgroundColor: 'rgba(124, 18, 20, 0.03)',
        borderLeftColor: 'rgba(124, 18, 20, 0.7)',
        borderLeftWidth: 5,
        borderRadius: 5,
        marginBottom: 10,
    },
    subjectTitle: {
        fontFamily: 'Barlow-Bold',
        fontSize: 15,
        lineHeight: 18,
        marginBottom: 5,
    },
    subjectSchedule: {
        color: '#cccccc',
        fontSize: 14,
        fontFamily: 'Segoeui-Regular',
    }
});

export default styles;