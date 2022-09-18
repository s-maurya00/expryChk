import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

const ScanScreen = ( props ) => {
    return (
        <View style={styles.container}>
            <AppText>Scan Screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default ScanScreen;
