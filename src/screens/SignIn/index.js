import { StyleSheet, Text, View, } from 'react-native';
import Icone from '../../components/icone';
import Caixa from '../../components/Caixa';
import Textos from '../../components/Textos';
import Dialogo from '../../components/Dialogo/Dialogo';
import DialogoSeguro from '../../components/DialogoSeguro/DialogoSeguro';
import Botao from '../../components/Botao';
import { Link } from '@react-navigation/native';
import { useState } from 'react';

export default function SignIn() {

    const {password, setPassword} = useState ("");
    const {username, setUsername} = useState ("");

    function handlepress(){
        //pegar info do email e senha e dar console.log
        console.log({
            username,password
        })
    }


  return (
    <Caixa>
        <Icone/>
        <Textos texto="Rhodes Island"/>
            <View style={styles.div}>
                <Dialogo texto="Username" onChangeText={setUsername} value={username}/>
                <DialogoSeguro texto="Password" onChangeText={setPassword} value={password} />
                <Botao texto="Log-in!" onPress={handlepress} />
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