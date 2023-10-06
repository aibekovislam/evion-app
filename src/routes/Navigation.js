import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import RegisterScreen from '../components/Register';
import HomePage from '../pages/HomePage';
import ProfileScreen from '../pages/ProfileScreen';
import LoginScreen from '../pages/LoginScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Авторизация" screenOptions={{ headerShown: true, headerStyle: {
        backgroundColor: '#145BA6'
      }, headerTintColor: '#145BA6' }}>
        <Stack.Screen name="Авторизация" component={LoginScreen} />
        <Stack.Screen name="Регистрация" component={RegisterScreen} />
        <Stack.Screen name="HomeTab" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
