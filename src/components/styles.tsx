import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    inputs: {
        margin: 50,
        width: '90%',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: '#FFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textInput: {
        backgroundColor: '#FFFF',
        borderRadius: 5,
        width: '100%',
        height: 55,
        marginTop: 6,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#F04130',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFF',
    },
    text: {
        fontSize: 15,
        color: '#FFFF',
    },
    titleModal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#30EF5A',
    },
    buttonModal: {
        width: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F04130',
        margin: 20,
    },
    textButtonModal: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F04130',
    }
});
