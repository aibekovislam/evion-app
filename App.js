import React, { useEffect } from 'react';
import Navigation from './src/routes/Navigation';
import { LocationProvider } from './src/contexts/LocationContext';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <LocationProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </LocationProvider>
  );
}
