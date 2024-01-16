import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const appName = "My App"
  return (
    <View style={styles.container}>
      <Text>Welcome to {appName} 🐶</Text>
      <StatusBar style="auto" />

      <Header name="My App" version={2}>
        <Text>Child</Text>
      </Header>
      
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
