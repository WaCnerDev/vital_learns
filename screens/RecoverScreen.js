import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LoginHeader2 from "../components/LoginHeader2";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function RecoverScreen() {
  return (
    <View>
      <LoginHeader2 />
      <Text style={styles.txtTitulo}>Recover Your Password Here</Text>
      <Text style={styles.txtSubtitulo}>
        Complete the following form to recover your password
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.fieldset}>
          <Text style={styles.labelForm}>Enter your email</Text>
          <View style={styles.inputContainer}>
            <FontAwesome style={styles.icon} name="user-circle-o" size={30} color="#B72424" />
            <TextInput style={styles.txtInput} />
          </View>
        </View>
        <View style={styles.fieldset}>
          <Text style={styles.labelForm}>
            Enter the last password you remember
          </Text>
          <View style={styles.inputContainer}>
          <Entypo style={styles.icon} name="lock" size={30} color="#B72424" />
            <TextInput style={styles.txtInput} secureTextEntry={true}/>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtButton}>Send Reset Link</Text>
        </TouchableOpacity>
        <Text style={styles.txtQuestion}>
          Don't have an account?
          <Text style={styles.txtSignUp}> Sign Up Now</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 40,
  },
  txtSubtitulo: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    textAlign: "left",
    width: 340,
    alignSelf: "center",
    marginTop: 10,
  },
  formContainer: {
    marginTop:35,
    marginHorizontal: 25,
  },
  labelForm: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
    marginBottom: 10,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
  },
  txtInput: {
    width: "100%",
    fontSize:18,
    height: "100%",
    paddingLeft: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  fieldset: {
    marginVertical: 5,
  },
  btn: {
    width: "100%",
    height: 38,
    backgroundColor: "#B72424",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  txtButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  txtQuestion: {
    fontSize: 16,
    color: "black",
    textAlign: "right",
    textAlign: "center",
    marginVertical: 15,
  },
  txtSignUp: {
    color: "#B72424",
    textDecorationLine: "underline",
    fontWeight:'bold',
  },
});
