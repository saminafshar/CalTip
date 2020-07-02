import React, {useState} from "react";
import {Alert, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {Slider} from 'react-native-elements';
import Colors from '../constants/Colors';
import LayoutStyles from "../constants/LayoutStyles";
import DefaultText from "./DefaultText";
import DefaultButton from "./DefaultButton";
import ModalScreen from "./ModalScreen";
import {useDimensions} from "@react-native-community/hooks";


export default function HomeScreen() {
    const {width, height} = useDimensions().window;

    const [sliderValue, setSliderValue] = useState(10);
    const [value, setValue] = useState("");
    const [numberPeople, setNumberPeople] = useState(2);
    const [total, setTotal] = useState(0)
    const [result, setResult] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const inputHandler = (input) => {
        setValue(input);
    };

    const stepperHandler = (isAdd) => {
        if (isAdd) {
            setNumberPeople((numberPeople) => (numberPeople += 1))
        } else {
            setNumberPeople((numberPeople) => (numberPeople -= 1))
        }
    };

    const calculateHandler = () => {

        if (/^[+-]?\d+([\.\,]\d+)?$/.test(value)) {
            setShowModal(true);
            let total = parseFloat(value) + (sliderValue / 100 * value);
            let roundedTotal = (Math.round((total + Number.EPSILON) * 100) / 100).toFixed(2)
            let result = (roundedTotal / numberPeople).toFixed(2);
            setTotal(roundedTotal);
            setResult(result);
        } else {
            Alert.alert('Invalid', 'Please enter valid amount', [{text: 'OK', style: 'cancel'}])
        }
    }

    const hideModal = () => {
        setNumberPeople(2);
        setSliderValue(10);
        setValue("");
        setShowModal(false);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={height > 660 ? styles.screenVertical : styles.screenHorizontal}>
                <ModalScreen
                    visible={showModal}
                    hideModal={hideModal}
                    result={result}
                    tip={sliderValue}
                    total={total}
                    split={numberPeople}
                />
                <View style={[styles.topContainer, LayoutStyles.topContainer]}>
                    <DefaultText style={styles.titleText}>CalcTip</DefaultText>
                    <Text style={styles.text2}>Enter total bill</Text>
                    <TextInput style={styles.input} placeholder='e.g. 56.46€' value={value} onChangeText={inputHandler}
                               keyboardType='numeric'></TextInput>
                </View>
                <View
                    style={height > 600 ? [styles.middleContainer, LayoutStyles.middleContainer] : [LayoutStyles.middleContainer, styles.middleContainerHorizontal]}>
                    <DefaultText style={styles.text}>Select tip</DefaultText>
                    <Slider style={styles.slider}
                            value={sliderValue}
                            onValueChange={(value) => setSliderValue(value)}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            thumbTintColor={Colors.primary}/>
                    <Text style={styles.text}>{sliderValue}%</Text>
                    <DefaultText style={styles.text}>Select split</DefaultText>
                    <View style={styles.buttonVerticalContainer}>
                        <DefaultButton title='-' onClick={() => {
                            stepperHandler(false)
                        }}/>
                        <DefaultText style={styles.text}>{numberPeople}</DefaultText>
                        <DefaultButton title='+' onClick={() => {
                            stepperHandler(true)
                        }}/>
                    </View>

                </View>
                <View style={[styles.bottomContainer, LayoutStyles.bottomContainer]}>
                    <DefaultButton onClick={calculateHandler} title={'Calculate'}></DefaultButton>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
};


const styles = StyleSheet.create({
    screenVertical: {
        flex: 1,
    },
    screenHorizontal: {
        flexDirection: 'row',
        marginLeft: 10,
        flex: 1

    },
    topContainer: {
        backgroundColor: 'white',
    },
    middleContainer: {
        backgroundColor: Colors.lightBackground,
    },
    middleContainerHorizontal: {
        backgroundColor: Colors.lightBackground,
        flex: 3
    },
    bottomContainer: {
        backgroundColor: Colors.lightBackground
    },
    buttonVerticalContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
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
