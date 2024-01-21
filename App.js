import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const appName = "My App"
  const [age, setAge] = useState(42);
  const [text, setText] = useState("");


  return (
    <View style={styles.container}>

      <Text>Welcome to {appName} 🐶</Text>
      <StatusBar style="auto" />
      <Header name="My App" version={2} />
      <Input />

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
