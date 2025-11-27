import { useAccount, useAppKit } from '@reown/appkit-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  const { disconnect } = useAppKit();
  const { address } = useAccount();

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Text>{address}</Text>
      <TouchableOpacity onPress={() => disconnect()}>
        <Text>Disconnect</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;