import React, { useEffect, useState } from 'react';
import { Text, TextInput, Alert, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/AuthorizationStyles';
import { useAuth } from '../contexts/AuthContext';
import ButtonEvion from '../components/ButtonEvion';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigation = useNavigation();
  const { login, dispatch } = useAuth();

  useEffect(() => {
    if (isButtonDisabled) {
      handleLogin();
    }
  }, [isButtonDisabled]);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          dispatch({ type: 'LOGIN', payload: token });
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    checkToken();
  }, [dispatch]);  

  const handleLogin = async () => {
    try {
      setIsButtonDisabled(true);
      const response = await login(phoneNumber, password);
      navigation.navigate("HomeTab");
    } catch (error) {
      console.error(error);
      Alert.alert("Ошибка", "Вы ввели неверные данные");
    } finally {
      setIsButtonDisabled(false);
    }
  };  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../static/3.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Номер телефона"
        onChangeText={text => setPhoneNumber(text.replace(/[^0-9]/g, ''))}
        value={phoneNumber}
        keyboardType="phone-pad"
        maxLength={9}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.textReg} onPress={() => navigation.navigate('Регистрация')}>
        Нет аккаунта? Зарегистрируйтесь.
      </Text>
      <ButtonEvion
        title="Войти"
        onPress={handleLogin}
        disabled={isButtonDisabled}
        style={isButtonDisabled ? styles.clicked : null}
      />
    </ScrollView>
  );
};

export default LoginScreen;
