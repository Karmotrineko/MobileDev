import { StyleSheet, TextInput, View, } from 'react-native';
import Icone from '../../components/Icone';
import Caixa from '../../components/Caixa';
import Textos from '../../components/Textos';
import DialogoSeguro from '../../components/DialogoSeguro/DialogoSeguro';
import { Link } from '@react-navigation/native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js'
import DashboardButton from '../../components/DashboardButton';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

export default function SignIn() {

    const { signIn } = useContext ( AuthContext );

    const navigation = useNavigation();

    const {password, setPassword} = useState ("");
    const {username, setUsername} = useState ("");

    function handlepress(){
        //pegar info do email e senha e dar console.log
        console.log({
            username,password
        });
    navigation.navigate('Dashboard');
    }


  return (
    <Caixa>
        <Icone/>
        <Textos texto="Rhodes Island"/>
            <View style={styles.div}>
                <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username}/>
                <DialogoSeguro texto="Password" onChangeText={setPassword} value={password} />
                <Link to={{screen: 'Dashboard'}} onPress={() => signIn()} style={styles.dash}>ENTRAR</Link>
                    <View style={styles.esqueci}>
                        <Link to={{screen: 'ForgotPassword'}} style={styles.link}>I forgot my password</Link>
                        <Link to={{screen: 'Register'}} style={styles.link}>Register now!</Link>
                    </View>
            </View>
    </Caixa>
  );
};