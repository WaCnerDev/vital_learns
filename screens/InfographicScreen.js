import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import InfographicThumbnail from "../components/InfographicThumbnail";
import firebaseApp from "../FireBaseAccess";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import NavTop from "../components/NavTop";

const db = getFirestore(firebaseApp);

export default function InfographicScreen() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "Infographics"));
        const infographics = [];
        qyCollection.forEach((infographic) => {
          const { imageUrl } = infographic.data();
          infographics.push({
            id: infographic.id,
            imageUrl,
          });
        });
        setList(infographics);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  return (
    <View style={styles.mainContainer}>
        <NavTop/>
      <Text style={styles.title}>Health Infographic Gallery</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.gridContainer}>
          {list.map((infographic) => (
            <InfographicThumbnail key={infographic.id} imageUrl={infographic.imageUrl} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollView: {
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
