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
            <Textos texto={"Welcome!"} />
                <View style={styles.div}>
            <Botao texto={'Request Meeting'} />
            <Botao texto={'Operational Areas'} />
            <Botao texto={'Emergency'} />
            <Botao texto={'Therapy Center'} />
            <Botao texto={'Available Partners'} />
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
