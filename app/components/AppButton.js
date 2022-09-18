import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../configs/colors';


const AppButton = ({
    activeOpacity,
    color="primary",
    fontWeight,
    onPress,
    style,
    textColor="white",
    textStyles,
    title
}) => {

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={
                [
                    styles.button,
                    {backgroundColor: colors[color]},
                    style
                ]
            }
            onPress={onPress}
        >
            <Text
                style={
                    [
                        styles.text,
                        {color: colors[textColor], fontWeight: fontWeight},
                        textStyles
                    ]
                }
            >
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center",
        marginVertical: 10,
        padding: 15,
        width: "100%",
    },

    text: {
        fontSize: 18,
        fontFamily: "Nunito_Bold",
    },
})

export default AppButton;