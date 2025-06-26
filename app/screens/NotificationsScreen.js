import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import { notifications } from '../../data/mockData';
import { COLORS } from '../../constants/theme';

export default function NotificationsScreen() {
  return (
    
    <View style={globalStyles.container}>
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
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  message: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 6,
  },
  time: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
