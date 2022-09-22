import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import Header from '../components/Header';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Item name"),
    manfDate: Yup.string().required().nullable().label("Manufactured date"),
    months: Yup.string().label("Months"),
    expDate: Yup.string().label("Expiry date"),
});

const AddItemScreen = ( props ) => {

    const [expiryMonths, setExpiryMonths] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const [error, setError] = useState();
    const [successfull, setSuccessfull] = useState();

    return (
        <Screen style={styles.container}>
            <Header title="Item Entry" headerStyles={styles.header} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Formik
                    initialValues={{
                        name: "",
                        manfDate: "",
                        months: "",
                        expDate: "",
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {() => {
                        return (
                            <>
                                <FormField
                                    name="name"
                                    placeholder="Item name"
                                    icon="plus-circle-outline"
                                />

                                <FormField
                                    name="manfDate"
                                    placeholder="Manufacture date"
                                    type='datePicker'
                                />

                                <FormField
                                    name="expDate"
                                    placeholder="Expiry date (optional)"
                                    icon="plus-circle-outline"
                                />

                                <FormField
                                    name="months"
                                    placeholder="Number of months"
                                    icon="plus-circle-outline"
                                />

                                <SubmitButton title="Add Item" style={styles.btn} />
                            </>
                        )
                    }}                
                </Formik>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    header: {
        marginBottom: 10,
    },

    // btn: {
    //     marginTop: 10,
    // }
});

export default AddItemScreen;