import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function LoginHeader2() {
  return (
    <View style={styles.backgroundcontainer}>
      <View>
        <TouchableOpacity style={styles.btnBack}>
          <AntDesign name="leftcircleo" size={38} color="white" />
        </TouchableOpacity>
        <Image
          source={require("../img/brainVitalLearns.png")}
          style={styles.image}
        />
        <Text style={styles.appname}> VitalLearns</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundcontainer: {
    margin:0,
    paddingTop: 20,
    width: "100%",
    height: 306,
    backgroundColor: "#B72424",
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderBottomRightRadius: 50,
    padding:0,
  },
  image: {
    width: 300,
    height: 210,
    padding: 0,
    margin: 0,
    marginTop: 20,
  },
  appname: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#ffffff",
    padding: 0,
    margin: 0,
    position: "absolute",
    top: 195,
    left: 50,
  },
  btnBack: {
    position:"absolute",
    top:5,
    left:-25,
  },
});
