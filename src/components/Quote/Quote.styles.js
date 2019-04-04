import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    quoteContainer: {
        height: '30%',
        width: '70%',
        shadowColor:'black',
        borderRadius: 15,
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.16,
        shadowRadius: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        opacity: 0.5,
    },
    quoteText: {
        textAlign: 'center'
    }

})
