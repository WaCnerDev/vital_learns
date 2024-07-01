// App.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Filters({ labels }) {
  return (
    <View style={styles.container}>
      <View style={labels.length === 0 ? styles.containeraux : styles.labelContainer} >
        <Text style={styles.label}>Filters</Text>
        {(
          labels.map((label, index) => (
            <View key={index} style={styles.btnAdd}>
              <Text style={styles.textbtn}>{label}</Text>
            </View>
          ))
        )}
        <TouchableOpacity style={labels.length === 0 ? styles.btnAddaux : styles.btnAdd}>
          <Text style={styles.textbtn}>Add +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal:25,
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "rgba(217,217,217,0.5)",
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  containeraux:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'100%',
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  btnAdd: {
    position: "relative",
    backgroundColor: "rgba(250,250,250,0.5)",
    borderWidth: 1,
    borderColor: "#B72424",
    borderRadius: 10,
    height: 25,
    marginTop: 5,
    marginHorizontal: 5,
    flexShrink: 1,
    flexGrow: 1,
  },
  btnAddaux:{
    backgroundColor: "rgba(250,250,250,0.5)",
    borderWidth: 1,
    borderColor: "#B72424",
    borderRadius: 10,
    height: 25,
    marginTop: 5,
    marginHorizontal: 5,
    width:65,
  },
  textbtn: {
    fontSize: 16,
    color: "#B72424",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
    textAlign: "center",
  }
});
