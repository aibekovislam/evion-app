import React from 'react';
import Navigation from './src/routes/Navigation';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}