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
    },
    sender: {
        fontFamily: 'Segoeui-Regular',
        fontSize: 13,
        lineHeight: 13,
        color: '#c2c2c2',
        textTransform: 'capitalize',
        marginBottom: 5,
        marginLeft: 2
    },
    wrap: {
        alignItems: 'baseline'
    },
    message: {
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        elevation: 1,
        borderRadius: 3,
        padding: 8,
        justifyContent: 'flex-end',
        marginBottom: 10,
        flexGrow: 0,
        alignItems: 'baseline'
    },
    messageME: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#fef5f5',
        elevation: 1,
        borderRadius: 3,
        padding: 8,
        justifyContent: 'flex-end',
        marginBottom: 10,
        flexGrow: 0,
        alignItems: 'baseline'
    },
    messageText: {
        fontFamily: 'Segoeui-Regular',
        fontSize: 14,
        lineHeight: 14,
        flexDirection: 'row',
        flexGrow: 0,
        margin: 0
    },
    date: {
        marginLeft: 7,
        fontFamily: 'Segoeui-Regular',
        fontSize: 11,
        color: '#c2c2c2',
        lineHeight: 11,
    },
    footerSend: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        elevation: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 25,
        fontFamily: 'Segoeui-Regular',
        fontSize: 14,
        marginRight: 10
    },
    btn: {
        backgroundColor: '#7c1214',
        height: 45,
        width: 45,
        borderRadius: 50,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;