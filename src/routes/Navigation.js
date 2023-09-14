import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/Register';
import HomePage from '../pages/HomePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Авторизация" component={LoginScreen} />
        <Stack.Screen name="Регистрация" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
