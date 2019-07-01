import { StyleSheet } from 'react-native';
import Color from './../../utils/color';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    verseWrapper: {
        backgroundColor: Color.gold,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    body: {
        padding: 16
    }
});