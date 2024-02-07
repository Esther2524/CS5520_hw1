import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
console.log(Stack);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#929" },
          headerTintColor: "white",
          headerTitle: "All my goals"
        }}>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
        options={({route}) => ({
          headerTitle: route.params.goalData.text,
          headerRight: () => (<Button title="warning" color="white"/>)

        })}
        name="Details" 
        component={GoalDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})