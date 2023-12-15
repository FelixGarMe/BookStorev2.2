// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./Screens/HomeScreen";
import IncomeScreen from "./Screens/IncomeScreen"; 
import ContactUsScreen from "./Screens/ContactUsScreen";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStackNavigator.Navigator>
  );
}

function BookstoreTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'purple',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Ingresos"
        component={IncomeScreen}
        options={{
          tabBarLabel: 'Ingresos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contáctanos"
        component={ContactUsScreen}
        options={{
          tabBarLabel: 'Contáctanos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BookstoreTabs />
    </NavigationContainer>
  );
}
