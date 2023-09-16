import React, { useState } from 'react';
import { Text, TextInput, Alert, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../utils/consts';
import { styles } from '../styles/AuthorizationStyles';
import { useAuth } from '../contexts/AuthContext';
import ButtonEvion from './ButtonEvion';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [ signed, setSigned ] = useState(false);
  const navigation = useNavigation();
  const { state, dispatch } = useAuth();

  const handleLogin = async () => {
    try {
      setSigned(true);
      const fullPhoneNumber = `+996${phoneNumber}`;
      const response = await axios.post(`${BASE_URL}/login`, { phone: fullPhoneNumber, password });
      const token = response.data.token;
      dispatch({ type: 'LOGIN', payload: token });
      navigation.navigate('HomeTab');
    } catch (error) {
      setSigned(false)
      Alert.alert('Ошибка', 'Неверный номер телефона или пароль');
      console.log({ phoneNumber, password });
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
      { signed ? (
        <ButtonEvion title="Войти" onPress={handleLogin} />
      ) : (
        <ButtonEvion title="Войти" onPress={handleLogin} style={styles.clicked} />
      ) }
    </ScrollView>
  );
};

export default LoginScreen;
