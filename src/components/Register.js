import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/AuthorizationStyles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [ changeWindow, setChangeWindow ] = useState(false);
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://eviona-pp-25e208506c12.herokuapp.com/register', {
        username,
        phone,
        password,
      });
      setChangeWindow(true)
    } catch (error) {
      console.error(error);
      Alert.alert('Ошибка', 'Что-то пошло не так. Попробуйте еще раз.');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post('https://eviona-pp-25e208506c12.herokuapp.com/verify', {
        phone, 
        verificationCode,
      });
      navigation.navigate('HomeTab');
    } catch (error) {
      console.error(error);
      Alert.alert('Ошибка', 'Неверный код верификации. Попробуйте еще раз.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{ !changeWindow ? "Регистрация" : "Верификация" }</Text>
      
      { !changeWindow && (
        <>
          <TextInput
          style={styles.input}
          placeholder="ФИО"
          onChangeText={text => setUsername(text)}
          value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Номер телефона в формате +996"
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
          <Button title="Register" onPress={handleRegister} />
        </>
      ) }

      {changeWindow && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            onChangeText={text => setVerificationCode(text)}
            value={verificationCode}
          />
          <Button title="Verify" onPress={handleVerify} />
        </>
      )}
    </ScrollView>
  );
};

export default RegisterScreen;
