import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormField, SubmitButton } from '../components/forms';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import Screen from '../components/Screen';

import colors from '../configs/colors';

import routes from '../navigations/routes';

// import { initializeApp } from 'firebase/compat/app';
// import { getFirestore, setDoc, doc } from 'firebase/firestore';

// // adding at 06:25 pm on 24th aug 2022
// import { useState } from 'react';
// import Firebase from '../../configs/firebase';
// import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

// const auth = Firebase.auth();



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});


//Dummy login Credentials
const LoginCredentials = {
    email: "sushil.maurya@somaiya.edu",
    password: "123456"
};


const LoginScreen = ( { navigation } ) => {

    // const firebaseConfig = {
    //     apiKey: "AIzaSyD9J0Swo8m896IcWclWUQ6L4Xx8pZ_PtfQ",
    //     authDomain: "dhoodhwale-00.firebaseapp.com",
    //     projectId: "dhoodhwale-00",
    //     storageBucket: "dhoodhwale-00.appspot.com",
    //     messagingSenderId: "497571576479",
    //     appId: "1:497571576479:web:49b4755909d40dfc99c0aa"
    // }

    // const handleSubmit = async() => {
        
    //     initializeApp(firebaseConfig);
        
    //     const firestore = getFirestore();
        
    //     console.log("byy")
    //     await setDoc(doc(firestore, "users", "user_1"), {
    //         employment: "hihiih",
    //         outfitColor: "red",
    //         specialAttack: "fireball"
    //     });
    //     console.log('hi');
    // };

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="Login" />

                <View style={styles.logo}>
                    <Image style={styles.imgLogo} source={require("../assets/favicon.png")} />
                </View>

                <View style={styles.formContainer}>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        {() => (
                            <>
                                {/* <ErrorMessage error="Invalid Email or password" visible={loginError} /> */}

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

                                <SubmitButton title="Login" />
                            </>
                        )}
                    </Formik>
                </View>
                
                <AppButton
                    color={colors.light}
                    fontWeight="400"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                    textColor="primary"
                    title="Don't have an account yet? Signup"
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

export default LoginScreen;