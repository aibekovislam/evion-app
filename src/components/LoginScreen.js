import React, { useState } from 'react';
import {  Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../utils/consts';
import { styles } from '../styles/AuthorizationStyles';
import { AsyncStorage } from 'react-native';
import { useAuth } from '../contexts/AuthContext';


const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { state, dispatch } = useAuth(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { phone, password });
      const token = response.data.token;
      dispatch({ type: 'LOGIN', payload: token });
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Ошибка', 'Неверный номер телефона или пароль');
      console.log({ phone, password });
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Войти</Text>
      <TextInput
        style={styles.input}
        placeholder="Номер телефона"
        onChangeText={text => setPhone(text)}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.textReg} onPress={() => navigation.navigate('Регистрация')}>Нет аккаунта? Зарегистрируйтесь.</Text>
      <Button title="Login" onPress={handleLogin} />
    </ScrollView>
  );
};


export default LoginScreen;
