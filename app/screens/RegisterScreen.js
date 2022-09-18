// import { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormField, SubmitButton } from '../components/forms';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import Screen from '../components/Screen';

import colors from '../configs/colors';

import routes from '../navigations/routes';

import firebaseApi from '../../firebase';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().required().min(6).label("Password Confirmation").oneOf([Yup.ref('password')], 'Passwords do not match')
});

const RegisterScreen = ( { navigation } ) => {

    // const [registerError, setRegisterError] = useState(false);

    // const handleSubmit = async ({ email, password }) => {

    //     try {
    //         if (email !== '' && password !== '') {
    //             await auth.createUserWithEmailAndPassword(email, password);
    //         }
    //     } catch {
    //         setRegisterError(!registerError);
    //     }
    // };

    const handleSubmit = (email, password) => {
        try{
            firebaseApi.createNewUser(email, password);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="SignUp" />

                <View style={styles.logo}>
                    <Image style={styles.imgLogo} source={require("../assets/favicon.png")} />
                </View>

                <View style={styles.formContainer}>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            confirmPassword: ""
                        }}
                        onSubmit={({ email, password }) => handleSubmit(email, password)}
                        validationSchema={validationSchema}
                    >
                        {() => (
                            <>
                                {/* <ErrorMessage error="Invalid email or password." visible={registerError} /> */}
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    keyboardType="email-address"
                                    name="email"
                                    placeholder="Email"
                                    textContentType="emailAddress"
                                />

                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    name="password"
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                />

                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                />

                                <SubmitButton title="SignUp" />
                            </>
                        )}
                    </Formik>
                </View>
                                                
                <AppButton
                    color={colors.light}
                    fontWeight="400"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                    textColor="primary"
                    title="Already have an account? Login"
                />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

    logo: {
        alignSelf: 'center',
        borderRadius: 20,
        height: 80,
        marginBottom: 30,
        marginTop: 50,
        width: 80,
    },

    imgLogo: {
        alignSelf: "center",
        height: 100,
        width: 100,
    },

    formContainer: {
        paddingHorizontal: 10,
    },
})

export default RegisterScreen;