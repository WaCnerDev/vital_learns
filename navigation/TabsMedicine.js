import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//here there are the icons
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//here we import the screen necessaries
import HomeScreen from "../screens/HomeScreen";
import MedicineScreen from "../screens/MedicineScreen";
import MenuScreen from "../screens/MenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import VideoScreen from "../screens/VideoScreen";

const Tab = createBottomTabNavigator();

export default function TabsMedicine() {
  return (
    <Tab.Navigator
      initialRouteName="MedicineScreen"
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#B72424",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={40} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: () => <Octicons name="video" size={40} color="black" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={MedicineScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="bandage-outline" size={40} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={40} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="appstore-o" size={40} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
