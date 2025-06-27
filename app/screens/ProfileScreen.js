import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { studentProfile } from '../../data/mockData';

export default function ProfileScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        
        {/* Avatar and Header */}
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Student Profile</Text>
            <Text style={styles.nameText}>{studentProfile.name}</Text>
          </View>
        </View>

        {/* Student Info Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎓 Student Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Class:</Text>
            <Text style={styles.value}>{studentProfile.class}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Route:</Text>
            <Text style={styles.value}>{studentProfile.route}</Text>
          </View>
        </View>

        {/* School Contact Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🏫 School Contact</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{studentProfile.schoolContact.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{studentProfile.schoolContact.phone}</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#10194E', // Dark background like reference
  },
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A3FA4',
    padding: 16,
    borderRadius: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: '#fff',
  },
  welcomeText: {
    color: '#C5CAE9',
    fontSize: 16,
    fontWeight: '500',
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 2,
  },
  card: {
    backgroundColor: '#2A3FA4',
    borderRadius: 20,
    padding: 18,
    marginBottom: 22,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFDE59',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3A4A92',
    paddingBottom: 6,
  },
  label: {
    fontSize: 16,
    color: '#C5CAE9',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
