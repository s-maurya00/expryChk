import { View, StyleSheet } from 'react-native';

import colors from '../configs/colors';

const ListItemSeparator = ( props ) => {
    return (
        <View style={styles.container} />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lighter,
        height: 1,
        width: "100%",
    },
});

export default ListItemSeparator;
