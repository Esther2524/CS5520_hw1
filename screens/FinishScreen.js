import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Colors from '../Colors'

export default function FinishScreen({ userNumber, handleRestart, isGameWon }) {
  // determine the image source based on whether the game was won
  const imageSource = isGameWon
    ? { uri: `https://picsum.photos/id/${userNumber}/100/100` }
    : require('../assets/sad_face.png');

  return (
      <View style={styles.screen}>
        <Text style={styles.titleStyle}>Game is Over</Text>
        <Card style={styles.cardStyle}>
          <Text style={styles.textStyle}>Here's your picture!</Text>
          <Image source={imageSource} style={styles.image} />
          <Button
            onPress={handleRestart}
            title='Start Again'
            disabled={false}
            textColor={Colors.normalButton} />
        </Card>
      </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
  },
  cardStyle: {
    width: 300,
    height: 300,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: "50%",
    height: "50%",
    marginTop: 20,
  }
})