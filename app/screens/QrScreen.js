import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

const QrScreen = (props) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <AppText>Requesting for camera permission</AppText>;
    }
    if (hasPermission === false) {
        return <AppText>No access to camera</AppText>;
    }

    return (
        <Screen style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default QrScreen;