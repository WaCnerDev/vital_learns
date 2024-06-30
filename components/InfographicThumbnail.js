import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function InfographicThumbnail({ imageUrl }) {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: imageUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginVertical: 10,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
});
