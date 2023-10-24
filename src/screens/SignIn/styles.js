import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    div: {
        marginTop: '10%',
    },
    link: {
        textDecorationLine: 'underline',
        marginHorizontal: '10px'
    },
    esqueci: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: '90%',
        margin: 12,
        marginBottom: -5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
      },
    dash: {
        alignItems: 'center',
        fontFamily: 'Trojan Pro Bold',
        fontSize: '30px',
        margin: 15,
        marginLeft: 60
    }
});

export default styles;