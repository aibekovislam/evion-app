import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/Register';
import HomePage from '../pages/HomePage';
import ProfileScreen from '../pages/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomBottomNavbar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Главная" component={HomePage} />
      <Tab.Screen name="Профиль" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Авторизация" screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="Авторизация" component={LoginScreen} />
        <Stack.Screen name="Регистрация" component={RegisterScreen} />
        <Stack.Screen name="HomeTab" component={CustomBottomNavbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
