import React from "react";
import { TextInput, StyleSheet } from "react-native";

function Dialogo({texto}){
    return(
        <TextInput style={styles.input} placeholder={texto} />
    )
};

const styles = StyleSheet.create({
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
});

export default Dialogo;