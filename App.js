import React, { useEffect } from 'react';
import Navigation from './src/routes/Navigation';
import { AuthProvider } from './src/contexts/AuthContext';
import { LocationProvider } from './src/contexts/LocationContext';

export default function App() {
  return (
    <AuthProvider>
      <LocationProvider>
          <Navigation />
      </LocationProvider>
    </AuthProvider>
  );
}
