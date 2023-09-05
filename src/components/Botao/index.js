import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Botao({texto}){
    return(
        <View style={styles.aba}>
            <Pressable onPress={() => {console.log('Botão Pressionado!'); }}
            
            style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'darkslategrey' : 'goldenrod',
                  padding: 10,
                  borderRadius: 12,
                  marginTop: 18,
                  marginBottom: 10
                },
              ]}>
                
                <Text style={{ color: 'white' }}>{texto}</Text>
            </Pressable>
        </View>        
    )
};

const styles = StyleSheet.create ({
    aba: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Botao;