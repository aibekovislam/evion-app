import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { BASE_URL } from '../utils/consts';

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
        return { ...state, oneUser: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getProfile = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile`);
      dispatch({
        type: 'oneUser',
        payload: response
      })
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    oneUser: state.oneUser,
    getProfile,
  }

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
