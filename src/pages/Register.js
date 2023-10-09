import React, { useEffect, useState } from 'react';
import { Text, TextInput, Alert, ScrollView, Image } from 'react-native';
import { styles } from '../styles/AuthorizationStyles';
import { useNavigation } from '@react-navigation/native';
import ButtonEvion from '../components/ButtonEvion';
import LogoSVG from '../static/EcoTaxiLogo';
import { getUserID, registerUser } from '../store/actions/authActions';

const RegisterScreen = () => {
  const [ first_name, setFirst_name ] = useState('');
  const [ last_name, setLast_name ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [ changeWindow, setChangeWindow ] = useState(false);
  const [ phoneIsExist, setPhoneIsExist ] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigation = useNavigation();

  async function handleRegister() {
    setIsButtonDisabled(true);

    const user = await getUserID();

    const userData = {
      username: user.username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone,
      password: user.password
    }
    console.log(user.user_id)
    await registerUser(userData, user.user_id);
    navigation.navigate('HomeTab');
    setIsButtonDisabled(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LogoSVG />
      { phoneIsExist && (
        <Text style={styles.errorTitle}>Пользователь с таким номером уже зарегистрирован</Text>
      ) }
      { !changeWindow && (
        <>
          <TextInput
          style={styles.input}
          placeholder="Фамилия"
          onChangeText={text => setFirst_name(text)}
          value={first_name}
          />
          <TextInput
            style={styles.input}
            placeholder="Имя"
            onChangeText={text => setLast_name(text)}
            value={last_name}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            onChangeText={text => setPhone(text)}
            value={phone}
          />
          <ButtonEvion disabled={isButtonDisabled} onPress={handleRegister} title="Регистрация"/>
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
          <ButtonEvion title="Подтвердить"/>
        </>
      )}
    </ScrollView>
  );
};

export default RegisterScreen;
