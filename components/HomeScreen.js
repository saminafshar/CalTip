import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Slider} from 'react-native-elements';
import Colors from '../constants/Colors';
import LayoutStyles from "../constants/LayoutStyles";
import DefaultText from "./DefaultText";
import DefaultButton from "./DefaultButton";


export default function HomeScreen() {
    const [sliderValue, setSliderValue] = useState(10);
    const [value, setValue] = useState("")

    const inputHandler = (input) => {
        setValue(input);
    }

    return (
        <View style={styles.screen}>
            <View style={[styles.topContainer, LayoutStyles.topContainer]}>
                <DefaultText style={styles.titleText}>CalcTip</DefaultText>
                <Text style={styles.text2}>Enter total bill</Text>
                <TextInput style={styles.input} placeholder='e.g. 56.46€' value={value} onChangeText={inputHandler}
                           keyboardType='numeric'></TextInput>
            </View>
            <View style={[styles.middleContainer, LayoutStyles.middleContainer]}>
                <DefaultText style={styles.text}>Select tip</DefaultText>

                <Slider style={styles.slider}
                        value={sliderValue}
                        onValueChange={(value) => setSliderValue(value)}
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        thumbTintColor={Colors.primary}
                />
                <Text style={styles.text}>Tip: {sliderValue}%</Text>
            </View>
            <View style={[styles.bottomContainer, LayoutStyles.bottomContainer]}>
                <DefaultButton title={'Calculate'}></DefaultButton>
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    topContainer: {
        backgroundColor: Colors.accent,
    },
    middleContainer: {
        backgroundColor: Colors.lightBackground,
    },
    bottomContainer: {
        backgroundColor: Colors.lightBackground
    },
    slider: {
        width: '80%'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleText: {
        fontFamily: 'open-sans-bold',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30
    },
    input: {
        marginTop: 10,
        fontSize: 36,
        textAlign: 'center',
        width: '90%'
    }
});
