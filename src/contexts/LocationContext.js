import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { BASE_URL } from '../utils/consts';

const LocationContext = createContext();

const initialState = {
  locations: []
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'locations':
      return { ...state, locations: action.payload };
    default:
      return state;
  }
};

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  const getLocations = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/locations`);
        dispatch({
            type: "locations",
            payload: response.data
        })
    } catch (error) {
        throw new Error("Ошибка при запросе", error);
    }
  }
  
  const value = {
    getLocations, 
    locations: state.locations,
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
