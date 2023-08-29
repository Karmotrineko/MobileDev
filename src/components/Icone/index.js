import React from "react";
import { View, StyleSheet, Image } from "react-native";

function Icone(){
    return(
        <Image
            source={require('../../../assets/amiya.png')}
            style={styles.img}
        />
    )
}

const styles = StyleSheet.create ({
    img: {
        width: 100,
        height: 200
    }
});

export default Icone;