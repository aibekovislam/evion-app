import React, { useState } from 'react';
import { Text, TextInput, Alert, ScrollView, Image } from 'react-native';
import { styles } from '../styles/AuthorizationStyles';
import { useNavigation } from '@react-navigation/native';
import ButtonEvion from './ButtonEvion';
import { useAuth } from '../contexts/AuthContext';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [ changeWindow, setChangeWindow ] = useState(false);
  const [ phoneIsExist, setPhoneIsExist ] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigation = useNavigation();
  const { register, verify } = useAuth();

  const handleRegister = () => {
    try {
      setIsButtonDisabled(true);
      const response = register(username, phone, password);
      setChangeWindow(true);
      setIsButtonDisabled(false);
    } catch (error) {
      console.log(error);
      setChangeWindow(false);
      setIsButtonDisabled(false);
      Alert.alert("Ошибка", "Вы не правильно ввели данные");
    }
  }

  const handleVerify = () => {
    try {
      setIsButtonDisabled(true);
      const response = verify(phone, verificationCode);
      navigation.navigate("HomeTab");
      setIsButtonDisabled(false);
    } catch (error) {
      console.log(error);
      setIsButtonDisabled(false);
      Alert.alert("Ошибка", "Вы не правильно ввели данные");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../static/3.png')}
      />
      { phoneIsExist && (
        <Text style={styles.errorTitle}>Пользователь с таким номером уже зарегистрирован</Text>
      ) }
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
          <ButtonEvion title="Регистрация" onPress={handleRegister} />
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
          <ButtonEvion title="Подтвердить" onPress={handleVerify} />
        </>
      )}
    </ScrollView>
  );
};

export default RegisterScreen;
