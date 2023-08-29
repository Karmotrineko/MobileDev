import { StyleSheet, View } from "react-native";

function Caixa({children}){
    return(
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aquamarine',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '10%'
    },
  });

export default Caixa;