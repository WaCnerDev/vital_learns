import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

export default function Article({
  author,
  title,
  pages,
  publishedDate,
  imageUrl,
}) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.titlesection}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        <View style={styles.authorsection}>
          <Text style={styles.authorLabel}>Author: </Text>
          <Text style={styles.authorValue}>{author}</Text>
        </View>
        <View style={styles.footerCard}>
          <View style={styles.pagessection}>
            <Text style={styles.pagesLabel}>Pages: </Text>
            <Text style={styles.pagesValue}>{pages}</Text>
          </View>
          <View style={styles.datesection}>
            <Text style={styles.dateLabel}>Published: </Text>
            <Text style={styles.dateValue}>{publishedDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignContent:"center",
    marginBottom: 10,
    padding:5
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  titlesection: {
    width: "100%",
    height: 43,
  },
  authorsection: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    marginLeft:5,
  },
  footerCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  authorLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  authorValue: {
    fontSize: 12,
    color: "#000",
  },
  pagessection: {
    display: "flex",
    flexDirection: "row",
  },
  datesection: {
    display: "flex",
    flexDirection: "row",
  },
  pagesLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  pagesValue: {
    fontSize: 12,
    color: "#000",
  },
  dateLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  dateValue: {
    fontSize: 12,
    color: "#000",
  },
});
