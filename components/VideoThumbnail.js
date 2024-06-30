import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function VideoThumbnail({ imageUrl, title, author, duration }){
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.thumbnail} 
        source={{uri: imageUrl}}  />
        <View style={styles.playIconContainer}>
          <MaterialIcons name="play-circle-outline" size={48} color="white" />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'auto',
  },
  thumbnailContainer: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius:20,
  },
  playIconContainer: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: 'gray',
  },
  duration: {
    fontSize: 16,
    color: 'gray',
  },
});