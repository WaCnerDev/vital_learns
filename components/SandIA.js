import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";

export default function SandIA({title}) {
  return (
    <View style={styles.headerContent}>
      <Text style={styles.txtTitulo}>{title}</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="search1" size={25} color="black" />
        <TextInput
          style={styles.txtInput}
          placeholder="What do you want to learn today?"
        />
      </View>
      <Text style={styles.labelForm}>You can also learn through AI!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.txtInput, styles.txtIA]}
          placeholder="What do you need?"
        />
        <SimpleLineIcons
          style={styles.icon}
          name="microphone"
          size={25}
          color="#B72424"
        />
        <Feather style={styles.icon} name="send" size={25} color="#B72424" />
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
    marginTop: 5,
    marginBottom: 15,
  },
  headerContent: {
    marginHorizontal: 25,
  },
  labelForm: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderRadius: 20,
  },
  icon: {
    marginHorizontal: 3,
  },
  txtInput: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  txtIA: {
    width: 290,
  },
});
