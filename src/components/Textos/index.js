import { StyleSheet, Text } from "react-native"

function Textos({ texto }){
    return (
        <Text style={styles.texto}>{texto}</Text>
    )
}

const styles = StyleSheet.create ({
    texto: {
        fontSize: '30px',
        color: 'white',
        fontWeight: 'bold',
        textShadowRadius: '15px',
        textShadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Trojan Pro Bold'
    }
})

export default Textos;