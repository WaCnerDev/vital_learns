import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//here we import the screen necessaries
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RecoverScreen from "../screens/RecoverScreen";
import TabsNavigartor from "../navigation/TabsNavigator"

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecoverScreen"
        component={RecoverScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabsNavigartor"
        component={TabsNavigartor}
        options={{ headerShown: false }}
        initialParams={{ routeName: 'TabsNavigartor' }}
      />
      <Stack.Screen
        name="MedicineScreen"
        component={TabsNavigartor}
        options={{ headerShown: false }}
        initialParams={{ routeName: 'MedicineScreen' }}
      />
      <Stack.Screen
        name="InfographicScreen"
        component={TabsNavigartor}
        options={{ headerShown: false }}
        initialParams={{ routeName: 'InfographicScreen' }}
      />
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
