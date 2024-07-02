import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import NavTop from "../components/NavTop";
import VideoThumbnail from "../components/VideoThumbnail";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import firebaseApp from "../FireBaseAccess";
import { addDoc, collection, getFirestore, getDocs, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore";
import SandIA from "../components/SandIA";

import TabsNavigator from "../navigation/TabsNavigator";

const db = getFirestore(firebaseApp);

export default function HomeScreen() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "Videos"));
        const videos = [];
        qyCollection.forEach((video) => {
          const { author, title, duration, imageUrl } = video.data();
          videos.push({
            id: video.id,
            author,
            title,
            duration,
            imageUrl,
          });
        });
        setList(videos);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <NavTop />
      <SandIA title={"Explore available content"}/>
      <View style={styles.popularContent}>
        <Text style={styles.subtitle}>The most popular</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {list.map((video) => (
            <View key={video.id}>
              <VideoThumbnail
                imageUrl={video.imageUrl}
                title={video.title}
                author={video.author}
                duration={video.duration}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <TabsNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "auto",
  },
  txtTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  popularContent: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 25,
    borderWidth:1,
    borderColor:'black'
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
  subtitle: {
    fontSize: 22,
    color: "black",
    textAlign: "left",
    marginVertical: 5,
    fontWeight: "bold",
  },
  scrollView: {
    paddingBottom: 20,
  },
});