import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Importar las pantallas
import HomeScreen from '../screens/HomeScreen';
import MissionScreen from '../screens/MissionScreen';
import VisionScreen from '../screens/VisionScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

// Importar los íconos (PNG)
const HomeIcon = require('../assets/icons/home-icon.png');
const MissionIcon = require('../assets/icons/mission-icon.png');
const VisionIcon = require('../assets/icons/vision-icon.png');
const AboutIcon = require('../assets/icons/about-icon.png');
const ContactIcon = require('../assets/icons/contact-icon.png');

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            switch (route.name) {
              case 'Home':
                iconSource = HomeIcon;
                break;
              case 'Mission':
                iconSource = MissionIcon;
                break;
              case 'Vision':
                iconSource = VisionIcon;
                break;
              case 'About':
                iconSource = AboutIcon;
                break;
              case 'Contact':
                iconSource = ContactIcon;
                break;
            }

            return (
              <Image
                source={iconSource}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            );
          },
          tabBarActiveTintColor: '#2D8CFF', // Color cuando la pestaña está activa
          tabBarInactiveTintColor: 'gray',   // Color cuando la pestaña no está activa
          headerShown: false,                // Oculta el encabezado superior
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mission" component={MissionScreen} />
        <Tab.Screen name="Vision" component={VisionScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactUsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}