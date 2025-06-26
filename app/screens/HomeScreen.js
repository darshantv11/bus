import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { globalStyles } from '../../styles/global';
import { busLocation, studentProfile } from '../../data/mockData';
import { COLORS } from '../../constants/theme';


export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>Welcome, {studentProfile.name}</Text>

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
        />
      </MapView>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>🚌 Route: {studentProfile.route}</Text>
        <Text style={styles.infoText}>⏰ ETA: {busLocation.eta}</Text>
        <Text style={styles.infoText}>
          📞 {studentProfile.schoolContact.name}: {studentProfile.schoolContact.phone}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary,
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoCard: {
    padding: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.black,
  },
});
