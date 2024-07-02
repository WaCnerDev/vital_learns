import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//here there are the icons
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//here we import the screen necessaries
import HomeScreen from "../screens/HomeScreen";
import MedicineScreen from "../screens/MedicineScreen";
import InfographicScreen from "../screens/InfographicScreen";
import MenuScreen from "../screens/MenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReadingScreen from "../screens/ReadingScreen";
import VideoScreen from "../screens/VideoScreen";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: () => <Octicons name="video" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Reading"
        component={ReadingScreen}
        options={{
          tabBarIcon: () => <Feather name="book-open" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: () => <AntDesign name="appstore-o" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
