import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { BASE_URL } from '../utils/consts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const initialState = {
  token: null,
  oneUser: null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, token: action.payload };
    case 'LOGOUT':
      return { ...state, token: null };
    case 'oneUser':
        return { ...state, oneUser: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      dispatch({
        type: 'oneUser',
        payload: response.data.user
      })
    } catch (error) {
      console.log(error)
    }
  }

  const register = async (username, phone, password) => {
    try {
      const response = await axios.post('https://eviona-pp-25e208506c12.herokuapp.com/register', {
        username,
        phone,
        password,
      });
      return {username, password, phone};
    } catch (error) {
      console.error(error);
      throw new Error("Ошибка регистрации");
    }
  };

  const verify = async (phone, verificationCode) => {
    try {
      const response = await axios.post('https://eviona-pp-25e208506c12.herokuapp.com/verify', {
        phone, 
        verificationCode,
      });
      return {phone, verificationCode};
    } catch (error) {
      console.error(error);
      throw new Error("Ошибка верификации");
    }
  };

  const login = async (phoneNumber, password) => {
    try {
      const fullPhoneNumber = `+996${phoneNumber}`;
      const response = await axios.post(`${BASE_URL}/login`, { phone: fullPhoneNumber, password });
      const token = response.data.token;

      await AsyncStorage.setItem('token', token);

      dispatch({ type: 'LOGIN', payload: token });

      return { phoneNumber, password };
    } catch (error) {
      console.error(error);
      throw new Error("Ошибка аутентификации");
    }
  };  

  const value = {
    oneUser: state.oneUser,
    getProfile,
    register,
    verify,
    login,
    dispatch,
    state
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
