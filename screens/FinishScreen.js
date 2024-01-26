import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function FinishScreen( {handleRestart}) {
  return (
    <View>
      <Card>
      <Text>FinishScreen Goodbye!</Text>
      <Button
            onPress={handleRestart}
            title='Play Again'
            disabled={false}
            textColor='blue' />
        
      </Card>



      
    </View>
  )
}

const styles = StyleSheet.create({})