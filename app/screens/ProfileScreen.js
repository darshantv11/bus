import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { studentProfile } from '../../data/mockData';

export default function ProfileScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>👧 Student Profile</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{studentProfile.name}</Text>
          <Text style={styles.label}>Class:</Text>
          <Text style={styles.value}>{studentProfile.class}</Text>
          <Text style={styles.label}>Route:</Text>
          <Text style={styles.value}>{studentProfile.route}</Text>
        </View>
        <Text style={styles.title}>🏫 School Contact</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{studentProfile.schoolContact.name}</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{studentProfile.schoolContact.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#10194E', // Deep blue
  },
  container: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Yellow accent
    marginBottom: 18,
    marginTop: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0,0,0,0.18)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  card: {
    backgroundColor: '#2A3FA4', // Lighter blue card
    padding: 24,
    borderRadius: 22,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 17,
    color: '#F5F6FA', // Brighter label
    marginBottom: 2,
    marginTop: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  value: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginLeft: 10,
    letterSpacing: 0.2,
  },
});
