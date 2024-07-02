import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";

import NavTop from "../components/NavTop";
import SandIA from "../components/SandIA";
import Filters from "../components/Filters";
import Article from "../components/Article";

import appFirebase from "../FireBaseAccess";
import { collection, getFirestore, getDocs} from "firebase/firestore";


const db = getFirestore(appFirebase);

export default function ReadingScreen() {
  const [listReadings, setList] = useState([]);

  const labels = [];

  
  labels.push('Old people');
  labels.push('Cancer');
  labels.push('Nutrition');
  labels.push('Pharmacology');  

  useEffect(() => {
    const getList = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "Articles"));
        const articles = [];
        qyCollection.forEach((article) => {
          const { title, author, pages, publishedDate,imageUrl } = article.data();
          articles.push({
            id: article.id,
            title,
            author,
            pages,
            publishedDate,
            imageUrl
          });
        });
        setList(articles);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  return (
    <View style={styles.container}>
      <NavTop />
      <SandIA title={"Find books, articles, magazines and more."}/>
      <Filters labels={labels}/>
      <View style={styles.popularContent}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {listReadings.map((article) => (
            <View key={article.id}>
              <Article
              author={article.author}
              title={article.title}
              pages={article.pages}
              publishedDate={article.publishedDate}
              imageUrl={article.imageUrl}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  popularContent: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 25,
  },
  scrollView: {
    paddingBottom: 20,
  },
});