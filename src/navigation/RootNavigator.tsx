import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAccount } from '@reown/appkit-react-native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <NavigationContainer>
      {isConnected ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;