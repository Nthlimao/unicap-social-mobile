import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7c1214',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        height: 60
    },
    headerTitle: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Barlow-Bold',
        letterSpacing: 0.3
    },
    content: {
        flex: 1,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});

export default styles;