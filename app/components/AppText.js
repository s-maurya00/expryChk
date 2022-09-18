import { Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';


const AppText = ( { children, style, otherProps } ) => {

    const [customFonts] = useFonts(
        {
            Lato_Black: require("../assets/fonts/Lato/Lato-Black.ttf"),
            Lato_BlackItalic: require("../assets/fonts/Lato/Lato-BlackItalic.ttf"),
            Lato_Bold: require("../assets/fonts/Lato/Lato-Bold.ttf"),
            Lato_BoldItalic: require("../assets/fonts/Lato/Lato-BoldItalic.ttf"),
            Lato_Italic: require("../assets/fonts/Lato/Lato-Italic.ttf"),
            Lato_Light: require("../assets/fonts/Lato/Lato-Light.ttf"),
            Lato_LightItalic: require("../assets/fonts/Lato/Lato-LightItalic.ttf"),
            Lato_Regular: require("../assets/fonts/Lato/Lato-Regular.ttf"),
            Lato_Thin: require("../assets/fonts/Lato/Lato-Thin.ttf"),
            Lato_ThinItalic: require("../assets/fonts/Lato/Lato-ThinItalic.ttf"),


            Roboto_Black: require("../assets/fonts/Roboto/Roboto-Black.ttf"),
            Roboto_BlackItalic: require("../assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
            Roboto_Bold: require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
            Roboto_BoldItalic: require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
            Roboto_Italic: require("../assets/fonts/Roboto/Roboto-Italic.ttf"),
            Roboto_Light: require("../assets/fonts/Roboto/Roboto-Light.ttf"),
            Roboto_LightItalic: require("../assets/fonts/Roboto/Roboto-LightItalic.ttf"),
            Roboto_Medium: require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
            Roboto_MediumItalic: require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
            Roboto_Regular: require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
            Roboto_Thin: require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
            Roboto_ThinItalic: require("../assets/fonts/Roboto/Roboto-ThinItalic.ttf"),


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