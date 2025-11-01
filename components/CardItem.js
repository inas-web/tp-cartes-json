import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CardItem({ title, description, image, url }) {

  const openLink = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity onPress={openLink} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.cover} />
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.link}>👉 Voir plus</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3, // ombre Android
    shadowColor: '#000', // ombre iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555', marginBottom: 8 },
  link: { color: '#007BFF', fontWeight: '600' }
});
