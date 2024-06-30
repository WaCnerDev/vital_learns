import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import NavTop from "../components/NavTop";
import { Ionicons, FontAwesome5, SimpleLineIcons, Entypo, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function MenuScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <NavTop />
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <Text style={styles.title}>Menu</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
            <SimpleLineIcons name="microphone" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Podcasts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('InfographicScreen')}>
        <View style={styles.iconContainer}>
            <FontAwesome5 name="images" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Infographics</Text>
         </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Entypo name="graduation-cap" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuItem} 
          onPress={() => navigation.navigate('MedicineScreen')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="bandage-outline" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Medicines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="people-outline" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="progress-clock" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Recently Viewed</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <AntDesign name="staro" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="robot-outline" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>IA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="headset-mic" size={40} color="#B72424" />
            </View>
            <Text style={styles.menuText}>Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    alignItems: 'center',
    width: 100,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth:2,
    borderColor: '#B72424',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});


