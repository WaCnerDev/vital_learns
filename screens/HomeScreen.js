import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import NavTop from "../components/NavTop";
import VideoThumbnail from "../components/VideoThumbnail";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import firebaseApp from "../FireBaseAccess";
import { addDoc, collection, getFirestore, getDocs, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore";

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
      <View style={styles.headerContent}>
        <Text style={styles.txtTitulo}>Explore available content</Text>
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
          <SimpleLineIcons style={styles.icon} name="microphone" size={25} color="#B72424" />
          <Feather style={styles.icon} name="send" size={25} color="#B72424" />
        </View>
      </View>
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