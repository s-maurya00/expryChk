import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './app/navigations/HomeNavigator';

import navigationTheme from './app/navigations/navigationTheme';

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <HomeNavigator />
        </NavigationContainer>
    );
}