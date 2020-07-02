import React from "react";
import {useFonts} from '@use-expo/font';
import {AppLoading} from "expo";

import HomeScreen from "./components/HomeScreen";

export default function App() {
    let [fontsLoaded] = useFonts({
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return <HomeScreen/>;
    }
}