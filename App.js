import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import { SafeAreaView } from 'react-native';

export default function App() {
  const appName = "My App"

  const [data, setData] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  function receiveInput(data) {
    console.log("receive input from Input.js", data);
    setData(data);
    setIsVisible(false);
  }

  function dismissModal() {
    setIsVisible(false);
  }



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.topView}>
        <Text>Welcome to {appName} 🐶</Text>
        <StatusBar style="auto" />
        <Header name="My App" version={2} />

        <Button title="add a goal" onPress={() => setIsVisible(true)} />
        <Input inputHandler={receiveInput} modalVisible={isVisible} dismissModal={dismissModal} />

      </View>

      <View style={styles.bottomView}>


        <Text>{data}</Text>


      </View>

    </SafeAreaView>







  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topView: {
    flex: 1,
  },

  bottomView: {
    flex: 4,
    backgroundColor: "green",
  },

  text: {
    textAlign: "center",
  },

});
