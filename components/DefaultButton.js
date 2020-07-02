import React from "react";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

export default function DefaultButton(props) {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <ButtonComponent>
            <View style={styles.button}>
                <DefaultText style={styles.buttonText}>{props.title}</DefaultText>
            </View>
        </ButtonComponent>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 5,
        // shadowColor: 'black',
        // shadowOpacity: 0.25,
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 10,
        elevation: 12
    },
    buttonText: {
        color: Colors.buttonTextColor,
        fontSize: 22,
    },
})