import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

const AddItemScreen = ( props ) => {
    return (
        <View style={styles.container}>
            <AppText>Add Item Screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default AddItemScreen;