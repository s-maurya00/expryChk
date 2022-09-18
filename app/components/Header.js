import { StyleSheet, View } from 'react-native';

import colors from '../configs/colors';

import AppText from './AppText';

const Header = ( { headerStyles, textStyle, title } ) => {

    return (
        <View style={[styles.topSection, headerStyles]}>
            <AppText style={[styles.text, textStyle]}>
                { title }
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({

    topSection: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        width: "100%",
    },

    text: {
        color: colors.primary,
        fontFamily: "Nunito_Bold",
        fontSize: 40,
        textAlign: "center",
    },
});

export default Header;