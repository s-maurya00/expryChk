import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';

import colors from '../configs/colors';


const whichMonth = {
    1: "Jan", 2: "Feb", 3: "Mar",
    4: "Apr", 5: "May", 6: "June",
    7: "Jul", 8: "Aug", 9: "Sept",
    10: "Oct", 11: "Nov", 12: "Dec",
};

const AppDatePicker = ( { onDateChange } ) => {

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const onChange = (event, choosenDate) => {
        setDate(choosenDate);
        setIsSelected(true);

        setSelectedDate(choosenDate.getDate() + " " +  whichMonth[choosenDate.getMonth() + 1] + " " + choosenDate.getFullYear());

        onDateChange(choosenDate.getDate() + " " +  whichMonth[choosenDate.getMonth() + 1] + " " + choosenDate.getFullYear());
    };

    const showDatepicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange: onChange,
            display: 'default',
            mode: 'date',
        });
    };

    const clearDate = () => {
        setDate(new Date());
        setIsSelected(false);

        setSelectedDate(null);
        onDateChange(null);
    };

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => showDatepicker()}>
            <View style={styles.iconAndDateContainer}>
                <View style={styles.icon}>
                    <MaterialCommunityIcons style={styles.icon} name="calendar" size={20} color={colors.medium} />
                </View>

                {
                    isSelected
                    ?
                    <AppText>
                        {
                            selectedDate
                        }
                    </AppText>
                    :
                    <AppText style={{ color: colors.light }}>
                        Select Date
                    </AppText>
                }
            </View>
            {
                isSelected
                ?
                <TouchableOpacity onPress={() => clearDate()}>
                    <MaterialCommunityIcons name='close-circle-outline' size={20} color={colors.black} />
                </TouchableOpacity>
                :
                null
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightest,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 10,
        padding: 15,
        width: "100%",
    },

    iconAndDateContainer: {
        alignItems: "center",
        flexDirection: "row",
    },

    icon: {
        marginRight: 5,
    },
});

export default AppDatePicker;