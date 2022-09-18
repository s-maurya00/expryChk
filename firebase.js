import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGgsMgwfofNVb-PHUabpdAf6XYQkTAxB0",
  authDomain: "exprychk00.firebaseapp.com",
  projectId: "exprychk00",
  storageBucket: "exprychk00.appspot.com",
  messagingSenderId: "913729470038",
  appId: "1:913729470038:web:860fff5c82e42615c305f7",
  databaseURL: "https://exprychk00-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const createNewUser = (email, password) => {
    set(ref(database, 'users/'), {
        email: email,
        password: password,
    });
}

export default {
    createNewUser,
}