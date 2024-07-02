import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RecoverScreen from "../screens/RecoverScreen";
import HomeScreen from "../screens/HomeScreen";
import InfographicGalleryScreen from "../screens/InfographicScreen";
import MenuScreen from "../screens/MenuScreen";
import MedicineScreen from "../screens/MedicineScreen";



const Stack = createStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator initialRouteName="RecoverScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="RecoverScreen" component={RecoverScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="InfographicScreen" component={InfographicGalleryScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false, }}/>
            <Stack.Screen name="MedicineScreen" component={MedicineScreen} options={{headerShown: false, }}/>
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
