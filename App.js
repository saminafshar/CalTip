import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Slider} from 'react-native-elements';


export default function App() {
    const [currentValue, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Value: {currentValue}</Text>
            <Slider style={styles.slider} value={currentValue} onValueChange={(value) => setValue(value)}/>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider: {
        width: '80%'
    }
});
