import { Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';


const AppText = ( { children, style, otherProps } ) => {

    const [customFonts] = useFonts(
        {
            Nunito_Black: require("../assets/fonts/Nunito/static/Nunito-Black.ttf"),
            Nunito_BlackItalic: require("../assets/fonts/Nunito/static/Nunito-BlackItalic.ttf"),
            Nunito_Bold: require("../assets/fonts/Nunito/static/Nunito-Bold.ttf"),
            Nunito_BoldItalic: require("../assets/fonts/Nunito/static/Nunito-BoldItalic.ttf"),
            Nunito_ExtraBold: require("../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
            Nunito_ExtraBoldItalic: require("../assets/fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf"),
            Nunito_ExtraLight: require("../assets/fonts/Nunito/static/Nunito-ExtraLight.ttf"),
            Nunito_ExtraLightItalic: require("../assets/fonts/Nunito/static/Nunito-ExtraLightItalic.ttf"),
            Nunito_Italic: require("../assets/fonts/Nunito/static/Nunito-Italic.ttf"),
            Nunito_Light: require("../assets/fonts/Nunito/static/Nunito-Light.ttf"),
            Nunito_LightItalic: require("../assets/fonts/Nunito/static/Nunito-LightItalic.ttf"),
            Nunito_Medium: require("../assets/fonts/Nunito/static/Nunito-Medium.ttf"),
            Nunito_MediumItalic: require("../assets/fonts/Nunito/static/Nunito-MediumItalic.ttf"),
            Nunito_Regular: require("../assets/fonts/Nunito/static/Nunito-Regular.ttf"),
        }
    )

    if(!customFonts) {
        return null;  
    }

    return (
        <Text style={[styles.text, style]} {...otherProps}>{ children }</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Nunito_Regular",
        fontSize: 18,
    },
});

export default AppText;