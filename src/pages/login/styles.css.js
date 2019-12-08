import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(124,18,20,0.9)',
        justifyContent: 'center', 
    },
    content: {
        padding: 15
    },
    logo: {
        width: 120,
        height: 116,
        alignSelf: 'center',
        marginBottom: 50
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: 10
    },
    col: {
        width: '100%',
    },
    col2: {
        width: '12%',
    },
    col10: {
        width: '88%',
    },
    inputMat: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        marginRight: 10,
        height: 42,
        fontSize: 14,
        backgroundColor: '#F7F7F7',
        fontFamily: 'Segoeui-Regular',
    },
    inputDigit: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        height: 42,
        fontSize: 14,
        backgroundColor: '#F7F7F7',
        fontFamily: 'Segoeui-Regular',
        textAlign: 'center'
    },
    inputSenha: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        height: 42,
        fontSize: 14,
        backgroundColor: '#F7F7F7',
        fontFamily: 'Segoeui-Regular',
    },
    button: {
        elevation: 2,
        height: 48,
        backgroundColor: '#5a0d0f',
        marginBottom: 20
    },
    buttonTitle: {
        fontSize: 16,
        fontFamily: 'Barlow-Bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5
    },
    warning: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Barlow-Bold',
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})

export default styles;