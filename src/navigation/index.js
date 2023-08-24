import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './userStack';
import AuthStack from './authStack';

import { StyleSheet, Text, View } from 'react-native';

function Navigation() {
  const { user } = useAuth();
  return (
    user ? <UserStack /> : <AuthStack />
  );
}

export default Navigation;
