import Caixa from "../../components/Caixa";
import Icone from "../../components/Icone";
import Textos from "../../components/Textos";
import { View, StyleSheet } from "react-native";
import Botao from "../../components/Botao";
import { Link } from '@react-navigation/native';

export default function Dashboard() {
    return (
        <Caixa>
            <Icone/>
            <Textos texto={"Bem-vindo!"} />
                <View style={styles.div}>
            <Botao texto={'Marcar consulta'} />
            <Botao texto={'Ver Horários'} />
            <Botao texto={'Emergencia'} />
            <Botao texto={'Terapia Hormonal'} />
            <Botao texto={'Médicos Disponiveis'} />
                </View>
                <Link to={{screen: 'SignIn'}} style={styles.link}>Voltar!</Link>
        </Caixa>
    );
};

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
    }
});