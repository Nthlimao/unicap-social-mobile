import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        marginRight: 10,
        marginLeft: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight:10,
        height: 60
    },
    headerTitle: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Barlow-Bold',
        letterSpacing: 0.3
    }
})

export default styles;