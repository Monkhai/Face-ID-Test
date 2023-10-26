import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as LocalAuth from 'expo-local-authentication';
import { useState } from 'react';

export default function App() {
  const [authRes, setAuthRes] = useState<LocalAuth.LocalAuthenticationResult | null>(null);

  const callAuth = async () => {
    const res = await LocalAuth.authenticateAsync();
    setAuthRes(res);
    console.log(res);
  };

  return (
    <View style={styles.container}>
      <Button title="Authenticate" onPress={callAuth} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
