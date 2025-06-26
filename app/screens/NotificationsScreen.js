import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { notifications } from '../../data/mockData';

export default function NotificationsScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>🔔 Notifications</Text>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          )}
        />
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
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 3,
  },
  message: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  time: {
    fontSize: 14,
    color: '#FFD700', // Yellow accent for time
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
