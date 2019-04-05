import  { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonContainer: {
        width: '40%',
        height: '30%',
        textAlign: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    quoteButton : {
        position: 'absolute',
        bottom:0,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonImage: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain',
    }
})
