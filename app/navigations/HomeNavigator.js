import { createStackNavigator } from "@react-navigation/stack";

import AddItemScreen from "../screens/AddItemScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ScanScreen from "../screens/ScanScreen";

import routes from "./routes";

const Stack = createStackNavigator();


const HomeNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={routes.HOME} screenOptions={{headerShown: false}}>
            <Stack.Screen component={HomeScreen} name={routes.HOME} />

            <Stack.Screen component={LoginScreen} name={routes.LOGIN} />

            <Stack.Screen component={RegisterScreen} name={routes.REGISTER} />

            <Stack.Screen component={AddItemScreen} name={routes.ADD_ITEM} />

            <Stack.Screen component={ScanScreen} name={routes.SCAN} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;