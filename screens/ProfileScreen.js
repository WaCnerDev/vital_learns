import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto,FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavTop from "../components/NavTop";


export default function ProfileScreen() {
  return (
    <View>
      <NavTop />
      <View style={styles.profileSection}>
        <Text style={styles.txtTitulo}>My Profile</Text>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://images.unsplash.com/photo-1543984613-f55ca6a1ba35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Text style={styles.name}>Thomas Martinez</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleButtonText}>Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleButtonText}>Doctor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionInfo}>
          <View style={styles.infoContainer}>
            <Fontisto name="email" size={25} color="black" />
            <Text style={styles.infoText}>thomas.martinez123@gmail.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <FontAwesome name="mars" size={25} color="black" />
            <Text style={styles.infoText}>Masculine</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.aboutTitle}>About Me</Text>
          <Text style={styles.aboutText}>
            Welcome to My Profile. I am Dr. Thomas Martinez, a passionate
            internist with over 10 years of experience in the healthcare field.
            My mission is to empower people through knowledge and provide them
            with the tools necessary to lead a healthy and fulfilling life.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Published Content</Text>
          <MaterialCommunityIcons style={styles.iconButton} name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileSection: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  txtTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  roleContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  roleButton: {
    width: 95,
    height: 25,
    borderWidth: 1,
    borderColor: "#B72424",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  roleButtonText: {
    color: "#B72424",
    fontSize: 16,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  aboutText: {
    paddingHorizontal: 20,
    fontSize: 12,
  },
  button: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
    marginLeft:15,
    marginRight:15,
    marginHorizontal:10,
    backgroundColor: "rgba(204,204,204,0.5)",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    width:330
  },
  buttonText: {
    fontWeight:'500',
    fontSize: 16,
    marginLeft:10
  },
  editButton: {
    backgroundColor: "#B72424",
    borderRadius: 10,
    marginVertical: 15,
    width: 378,
    height: 38,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 6,
  },
  sectionInfo: {
    marginVertical: 5,
  },
  iconButton:{
    marginRight:10
  },
  iconButton:{
    marginRight:10
  },
  line: {
    borderBottomColor: 'rgb(174,174,174)',
    borderBottomWidth: 1,
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
});
