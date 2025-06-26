import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { studentProfile } from '../../data/mockData';
import { COLORS } from '../../constants/theme';

export default function ProfileScreen() {
  return (
    

    <View style={globalStyles.container}>
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
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.secondary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
