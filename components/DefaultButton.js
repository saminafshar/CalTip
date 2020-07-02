import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

export default function DefaultButton(props) {

    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <DefaultText style={styles.buttonText}>{props.title}</DefaultText>
            </View>
        </TouchableOpacity>
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