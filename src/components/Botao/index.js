import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Botao({ texto, navigation }) {
  const handleButtonPress = () => {
    // Use the navigation prop to navigate to another screen
    navigation.navigate('ForgotPassword'); // Replace 'ScreenName' with the actual name of the screen you want to navigate to
  };

  return (
    <View style={styles.aba}>
      <Pressable onPress={handleButtonPress} style={({ pressed }) => [
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
  );
}

const styles = StyleSheet.create({
  aba: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Botao;
