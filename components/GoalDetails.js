import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function GoalDetails({route}) {
  return (
    <View>
      <Text>GoalDetails</Text>
     <Text>{route.params.goalData.id}</Text>
     <Text>{route.params.goalData.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})