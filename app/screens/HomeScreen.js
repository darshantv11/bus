import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { busLocation, studentProfile } from '../../data/mockData';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.headerCard}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome 👋</Text>
            <Text style={styles.nameText}>{studentProfile.name}</Text>
          </View>
        </View>

        {/* Stylish Map Section */}
        <View style={styles.mapCardWrapper}>
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
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
              </Marker>
            </MapView>
            <View style={styles.mapBadge}>
              <Text style={styles.mapBadgeText}>🚌 ETA: {busLocation.eta}</Text>
            </View>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.infoCard}>
          <Text style={styles.infoHeading}>Today's Trip Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>🛣 Route:</Text>
            <Text style={styles.infoValue}>{studentProfile.route}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>⏱ ETA:</Text>
            <Text style={styles.infoValue}>{busLocation.eta}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>📞 Contact:</Text>
            <Text style={styles.infoValue}>
              {studentProfile.schoolContact.phone}
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
    backgroundColor: '#10194E', // deep dark blue like reference
  },
  container: {
    flex: 1,
    padding: 18,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A3FA4',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
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
    fontSize: 20,
    fontWeight: '700',
  },

  mapCardWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mapCard: {
    width: width - 36,
    height: 220,
    backgroundColor: '#2A3FA4',
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#FFDE59',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    elevation: 2,
  },
  mapBadgeText: {
    color: '#2A3FA4',
    fontWeight: 'bold',
    fontSize: 13,
  },

  infoCard: {
    backgroundColor: '#2A3FA4',
    borderRadius: 20,
    padding: 18,
    elevation: 5,
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFDE59',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#3A4A92',
    borderBottomWidth: 1,
  },
  infoLabel: {
    fontSize: 16,
    color: '#C5CAE9',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
