import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { busLocation, studentProfile } from '../../data/mockData';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.nameText}>{studentProfile.name}</Text>
          </View>
        </View>

        {/* Map Card Section */}
        <View style={styles.mapCard}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: busLocation.latitude,
              longitude: busLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: busLocation.latitude,
                longitude: busLocation.longitude,
              }}
              title="School Bus"
              description={`ETA: ${busLocation.eta}`}
            >
              <Image
                source={require('../../assets/bus2.png')}
                style={{ width: 60, height: 60 }}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
          {/* Optional: Floating badge on the map */}
          <View style={styles.mapBadge}>
            <Text style={styles.mapBadgeText}>🚌 ETA: {busLocation.eta}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>🚌</Text>
            <Text style={styles.infoText}>Route: {studentProfile.route}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>⏰</Text>
            <Text style={styles.infoText}>ETA: {busLocation.eta}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📞</Text>
            <Text style={styles.infoText}>
              Transport Incharge: {studentProfile.schoolContact.phone}
            </Text>
          </View>
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
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A3FA4', // Lighter blue card
    borderRadius: 22,
    padding: 20,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 16,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.9,
  },
  nameText: {
    color: '#FFD700', // Yellow accent
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  mapCard: {
    backgroundColor: '#2A3FA4',
    borderRadius: 22,
    padding: 8,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 18,
    overflow: 'hidden',
  },
  mapBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  mapBadgeText: {
    color: '#2A3FA4',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: '#2A3FA4', // Same as card
    borderRadius: 22,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 10,
    color: '#fff',
  },
  infoText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
});