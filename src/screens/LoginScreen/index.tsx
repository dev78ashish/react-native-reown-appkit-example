import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConnectButton from '../../components/ConnectButton';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Connect your wallet to continue
        </Text>

        {/* Connect Wallet Button */}
        <ConnectButton />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inner: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});
