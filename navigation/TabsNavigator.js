import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//here there are the icons
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

//here we import the screen necessaries
import HomeScreen from "../screens/HomeScreen";
import MedicineScreen from "../screens/MedicineScreen";
import InfographicScreen from "../screens/InfographicScreen";
import MenuScreen from "../screens/MenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReadingScreen from "../screens/ReadingScreen";
import VideoScreen from "../screens/VideoScreen";

// Creamos el Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabsNavigator({ route }) {  //recibe el nombre de la ruta desde el StackNavigator

  // Obtenemos el nombre de la ruta desde los parámetros de la ruta
  const { routeName } = route.params;

  // Determinamos el nombre de la ruta inicial basado en el nombre de la ruta
  const initialRouteName = (() => {
    if (routeName == 'MedicineScreen') {
      return 'Medicines';
    } else if (routeName == 'TabsNavigartor') {
      return 'Home';
    } else if (routeName == 'InfographicScreen') {
      return 'Infographics';
    } else {
      return 'Home';
    }
  })();

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarStyle: {
          height: 70, // Estilo de la tabs
        },
        tabBarLabelStyle: {
          fontSize: 12, // Tamaño de la fuente de las etiquetas de las pestañas
        },
        tabBarActiveTintColor: "#B72424",// Color de la etiqueta activa
        tabBarInactiveTintColor: "black",// Color de la etiqueta inactiva
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={35} color="black" />
          ),
          headerShown: false,// No mostrar el header
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: () => <Octicons name="video" size={35} color="black" />,
          headerShown: false,// No mostrar el header
        }}
      />
      {routeName === 'MedicineScreen' ? ( // toda esta sentencia es un conjunto de condiciones que determina el aspecto de las tabs segun el nombre de la ruta
        <Tab.Screen
          name="Medicines"
          component={MedicineScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="bandage-outline" size={35} color="black" />
            ),
            headerShown: false // No mostrar el header
          }}
        />
      ) : routeName === 'InfographicScreen' ? (
        <Tab.Screen
          name="Infographics"
          component={InfographicScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="image" size={35} color="black" />
            ),
            headerShown: false // No mostrar el header
          }}
        />
      ) : (
        <Tab.Screen
          name="Reading"
          component={ReadingScreen}
          options={{
            tabBarIcon: () => (
              <Feather name="book-open" size={35} color="black" />
            ),
            headerShown: false // No mostrar el header
          }}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={35} color="black" />
          ),
          headerShown: false // No mostrar el header
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="appstore-o" size={35} color="black" />
          ),
          headerShown: false // No mostrar el header
        }}
      />
    </Tab.Navigator>
  );
}
