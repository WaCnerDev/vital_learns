import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function NavTop() {
  return (
    <View style={styles.backgroundcontainer}>
      <TouchableOpacity>
        <FontAwesome5
          style={styles.leaveProfile}
          name="user-minus"
          size={25}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.appname}> VitalLearns</Text>
      <View style={styles.groupbtns}>
        <TouchableOpacity>
          <Ionicons
            style={styles.icons}
            name="settings-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.icons}
            name="notifications-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundcontainer: {
    margin: 0,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: "#B72424",
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  appname: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#ffffff",
    padding: 0,
    margin: 0,
    alignSelf: "center",
  },
  icons: {
    marginHorizontal: 5,
  },
  groupbtns: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  leaveProfile: {
    marginLeft: 5,
  },
});
