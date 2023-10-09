import React, { useEffect, useState } from 'react';
import { Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/AuthorizationStyles';
import ButtonEvion from '../components/ButtonEvion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoSVG from '../static/EcoTaxiLogo';
import { useDispatch } from 'react-redux';
import { signInUser } from '../store/actions/authActions';

const LoginScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isButtonDisabled, setIsButtonDisabled ] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function handleSignIn() {
    const user_data = {
      user_id: user_id,
      username: username.trim(),
      password: password.trim()
    }
    setIsButtonDisabled(true);
    const response = await signInUser(user_data.username, user_data.password, dispatch);
    const user_id = response.user_id;
    await AsyncStorage.setItem('user', JSON.stringify(user_data));

    if(user_data?.user_id) {
      navigation.navigate('Регистрация');
    } else {
      navigation.navigate('HomeTab');
    }
    setIsButtonDisabled(false);
  }

  useEffect(() => {
    if(!username) {
      navigation.navigate("HomeTab")
    }
  }, [username])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LogoSVG />
      <TextInput 
        style={styles.input}
        placeholder="Имя пользователя"
        onChangeText={(e) => setUsername(e.toLocaleLowerCase())}
        value={username}
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
        onPress={() => handleSignIn()}
        title="Войти"
        disabled={isButtonDisabled}
        style={isButtonDisabled ? styles.clicked : null}
      />
    </ScrollView>
  );
};

export default LoginScreen;
