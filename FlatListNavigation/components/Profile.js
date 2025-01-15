import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: </Text>
      <Text style={styles.label}>Age: </Text>
      <Text style={styles.label}>Course: </Text>
      <Text style={styles.label}>Gender: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
