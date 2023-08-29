import { StyleSheet, Text, View, } from 'react-native';
import Icone from '../../components/icone';
import Caixa from '../../components/Caixa';
import Textos from '../../components/Textos';
import Dialogo from '../../components/Dialogo/Dialogo';
import DialogoSeguro from '../../components/DialogoSeguro/DialogoSeguro';
import Botao from '../../components/Botao';
import { Link } from '@react-navigation/native';

export default function SignIn() {
  return (
    <Caixa>
        <Icone/>
        <Textos texto="Rhodes Island"/>
            <View style={styles.div}>
                <Dialogo texto="Username" />
                <DialogoSeguro texto="Password" />
                <Botao texto="Log-in!" />
                    <View style={styles.esqueci}>
                        <Link to={{screen: 'ForgotPassword'}} style={styles.link}>I forgot my password</Link>
                        <Link to={{screen: 'Register'}} style={styles.link}>Register now!</Link>
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
        marginHorizontal: '10px'
    },
    esqueci: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});