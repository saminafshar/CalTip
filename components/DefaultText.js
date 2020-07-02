import React from "react";
import {StyleSheet, Text} from "react-native";

export default function DefaultText(props) {

    return (
        <Text style={[styles.text, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 22,
    }
})