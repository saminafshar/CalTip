import React from 'react';
import {Modal, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import {useDimensions} from "@react-native-community/hooks";
import DefaultButton from "./DefaultButton";
import DefaultText from "./DefaultText";

export default function ModalScreen(props) {
    const {height} = useDimensions().window;

    return (
        <Modal visible={props.visible} animationType='slide' supportedOrientations={['portrait', 'landscape']}>
            <View style={height > 660 ? styles.screenVertical : styles.screenHorizontal}>
                <View style={[LayoutStyles.topContainer, styles.topContainer]}>
                    <DefaultText style={styles.titleText}>Total per person:</DefaultText>
                    <DefaultText style={styles.titleText}>{props.result}€</DefaultText>
                </View>
                <View
                    style={height > 600 ? [styles.middleContainer, LayoutStyles.middleContainer] : [LayoutStyles.middleContainer, styles.middleContainerHorizontal]}>
                    <DefaultText style={styles.text}>Total amount with tip is {props.total}€, split
                        between {props.split} people with
                        a {props.tip}% tip. Rounded up so any odd amounts aren't cut. </DefaultText>
                </View>
                <View style={[LayoutStyles.bottomContainer, styles.bottomContainer]}>
                    <DefaultButton title='Recalculate' onClick={props.hideModal}/>
                </View>
            </View>

        </Modal>
    )
}


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
        backgroundColor: Colors.lightBackground,
    },
    middleContainer: {
        backgroundColor: 'white',
        marginHorizontal: 15
    },
    middleContainerHorizontal: {
        backgroundColor: 'white',
        flex: 3
    },
    bottomContainer: {
        backgroundColor: 'white',
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