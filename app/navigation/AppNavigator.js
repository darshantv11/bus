import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {() => <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainApp">
          {() => <TabNavigator isLoggedIn={isLoggedIn} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
