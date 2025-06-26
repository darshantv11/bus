import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

export default function Header({ title = "Parent Tracker" }) {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 4,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
