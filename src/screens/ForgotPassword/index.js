import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icone from '../../components/Icone';
import Caixa from '../../components/Caixa';
import Textos from '../../components/Textos';
import Dialogo from '../../components/Dialogo/Dialogo';
import Botao from '../../components/Botao';
import { Link } from '@react-navigation/native';

export default function ForgotPassword() {
  return (
    <Caixa>
        <Icone/>
        <Textos texto="Rhodes Island"/>
            <View style={styles.div}>
                <View style={styles.esqueci}>
                    <Text style={styles.header}>Account Restoration</Text>
                </View>
                <Dialogo texto="Email" />
                <Botao texto="Reset password!" />
                    <View style={styles.esqueci}>
                        <Link to={{screen: 'SignIn'}} style={styles.link}>Go back!</Link>
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
    },
    esqueci: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        fontSize: '20px',
        fontFamily: 'Tahoma',
        fontWeight: 'bold',
        marginTop: '-10px'
    }
});