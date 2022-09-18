import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../components/AppText";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

import colors from "../configs/colors";

import routes from "../navigations/routes";


const HomeScreen = ( { navigation } ) => {

    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require("../assets/favicon.png")} style={styles.img} />

                    <AppText style={styles.expry}>Expry</AppText>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
                    <AppText style={styles.login}>Log In</AppText>
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <View style={styles.scan}>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.ADD_ITEM)} style={styles.scanItem}>
                        <MaterialCommunityIcons name="chevron-right" size={30} color={colors.primary} />

                        <AppText style={styles.txt}>Enter Item Manually</AppText>
                    </TouchableOpacity>

                    <ListItemSeparator />

                    <TouchableOpacity onPress={() => navigation.navigate(routes.SCAN)} style={styles.scanItem}>
                        <MaterialCommunityIcons name="qrcode" size={30} color={colors.primary} />

                        <AppText style={styles.txt}>Scan QR Code</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: { },

    header: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        paddingVertical: 20,
    },

    headerLeft: {
        alignItems: "center",
        flexDirection: "row",
    },

    img: {
        borderColor: colors.lighter,
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        marginRight: 10,
        width: 40,
    },

    expry: {
        fontFamily: "Nunito_Bold",
    },

    login: {
        borderColor: colors.lighter,
        borderRadius: 5,
        borderWidth: 1,
        color: colors.primary,
        padding: 5,
        paddingHorizontal: 10,
        fontFamily: "Nunito_Bold",
    },

    body: {
        backgroundColor: colors.lightest,
        flex: 1,
        padding: 20,
    },

    scan: {
        backgroundColor: colors.white,
        borderColor: colors.lighter,
        borderRadius: 10,
        borderWidth: 1,
    },

    scanItem: {
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },

    txt: {
        marginLeft: 10,
    },
});

export default HomeScreen;