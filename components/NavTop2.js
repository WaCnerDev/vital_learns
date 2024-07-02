import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavTop2() {
  const navigation = useNavigation();
  return (
    <View style={styles.backgroundcontainer}>
      <View style={styles.contentContainer}>
        <TouchableOpacity  style={styles.btnBack} onPress={() => navigation.navigate("LoginScreen")}>
          <AntDesign name="leftcircleo" size={38} color="white" />
        </TouchableOpacity>
        <Text style={styles.appname}>VitalLearns</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundcontainer: {
    margin: 0,
    paddingTop: 20,
    width: "100%",
    height: 80,
    backgroundColor: "#B72424",
    position: "relative",
    padding: 5,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  appname: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#ffffff",
    padding: 0,
    margin: 0,
  },
  btnBack: {
    marginLeft: 15,
  },
});
