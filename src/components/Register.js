import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://eviona-pp-25e208506c12.herokuapp.com/register', {
        username,
        phone,
        password,
      });

      Alert.alert('Успешная регистрация', 'Пользователь зарегистрирован успешно');
    } catch (error) {
      console.error(error);
      Alert.alert('Ошибка', 'Что-то пошло не так. Попробуйте еще раз.');
    }
  };

  return (
    <View>
      <Text>Register Screen</Text>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Phone Number"
        onChangeText={text => setPhone(text)}
        value={phone}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
