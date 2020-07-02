import React from "react";
import {useFonts} from '@use-expo/font';
import {AppLoading} from "expo";

import HomeScreen from "./components/HomeScreen";

export default function App() {
    let [fontsLoaded] = useFonts({
        "inter-bold": require("./assets/fonts/Inter-Bold.otf"),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return <HomeScreen/>;
    }
}