import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    group: {
        flexDirection:'row',
        alignItems: 'flex-start',
        marginBottom: 25,
        height: 55,
    },
    avatar: {
        fontSize: 24,
        fontFamily: 'Barlow-Regular',
    },
    header: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        height: 55,
    },  
    title: {
        fontSize: 14,
        fontFamily: 'Barlow-Bold',
    },
    subtitle: {
        color: '#c2c2c2',
        fontSize: 14,
        fontFamily: 'Segoeui-Regular',
    },
    options: {
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    date: {
        fontSize: 11,
        color: '#c2c2c2',
        fontFamily: 'Segoeui-Regular',
        marginBottom: 10,
    },
    badge: {
        backgroundColor: '#7c1214',
    }
});

export default styles;