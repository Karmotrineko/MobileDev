import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DashboardButton() {
  const navigation = useNavigation();

  const handleNavigateToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.aba}>
      <Pressable
        onPress={handleNavigateToDashboard} 
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "darkslategrey" : "goldenrod",
            padding: 10,
            borderRadius: 12,
            marginTop: 18,
            marginBottom: 10,
          },
        ]}
      >
        <Text style={{ color: "white" }}>Log-in!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  aba: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardButton;