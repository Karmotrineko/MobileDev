import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icone from '../../components/icone';
import Caixa from '../../components/Caixa';
import Textos from '../../components/Textos';
import Dialogo from '../../components/Dialogo/Dialogo';
import DialogoSeguro from '../../components/DialogoSeguro/DialogoSeguro';
import Botao from '../../components/Botao';

export default function SignIn() {
  return (
    <Caixa>
        <Icone/>
        <Textos texto="Rhodes Island"/>
            <View style={styles.div}>
                <DialogoSeguro texto="New password" />
                <Botao texto="Reset!" />
                    <View style={styles.esqueci}>
                        <Text style={styles.link}>Go back!</Text>
                    </View>
            </View>
    </Caixa>
  );
};

const styles = StyleSheet.create({
    div: {
        marginTop: '10%',
    },
    link: {
        textDecorationLine: 'underline',
    },
    esqueci: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});