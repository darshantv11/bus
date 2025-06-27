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

export default function LoginScreen({ onLoginSuccess }) {
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
          if (onLoginSuccess) onLoginSuccess();
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>Login with your mobile number</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          keyboardType="numeric"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          placeholderTextColor="#9CA3AF"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By continuing, you agree to our Terms & Privacy Policy.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#10194E',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  title: {
    fontSize: 28,
    color: '#FFDE59',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#D1D5DB',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1F2A6C',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#374151',
  },
  button: {
    backgroundColor: '#FFDE59',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#10194E',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
  },
});
