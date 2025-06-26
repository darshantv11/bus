import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { globalStyles } from '../../styles/global';
import { COLORS } from '../../constants/theme';

export default function LoginScreen({onLoginSuccess}) {
  const [mobile, setMobile] = useState('');

  const handleLogin = () => {
  if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
    Alert.alert('Invalid number', 'Please enter a valid 10-digit mobile number');
    return;
  }

  Alert.alert('OTP Sent', `OTP sent to ${mobile} (simulated)`, [
    {
      text: 'OK',
      onPress: () => {
        if (onLoginSuccess) onLoginSuccess(); // 🚀 Navigate to TabNavigator
      },
    },
  ]);
};


  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>📱 Login with Mobile Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter mobile number"
        keyboardType="numeric"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
