import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RecoverScreen from "../screens/RecoverScreen";


const Stack = createStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator initialRouteName="RecoverScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="RecoverScreen" component={RecoverScreen} options={{headerShown: false, }}/>
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}
