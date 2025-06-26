import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2E86DE',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            case 'Notifications':
              iconName = 'notifications-outline';
              break;
            case 'Login':
              iconName = 'log-in-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
    
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}
