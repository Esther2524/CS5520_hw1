import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

export default function GameScreen({ userName, userNumber, isGuessHigher, attemptsLeft
  , showCorrectGuessModal, dismissCorrectGuessModal, showWrongGuessModal,
  handleDone, handleGuessAgain }) {

  // The Modal component in React Native covers the whole screen by default, 
  // and its content is typically aligned to the top. we can adjust your GameScreen component to center the content inside the modals

  return (
    <View style={styles.screen}>

      {/* when the user guess the number wrong, tell them to guess higher or guess lower
      and how many attemps left*/}
      <Modal visible={showCorrectGuessModal} transparent={true}>
        <View style={styles.modalContent}>
          <Card style={styles.modalCardOne}>
            <Text>Congrats {userName}! You won!</Text>
            <Button
              onPress={dismissCorrectGuessModal}
              title='Thank you'
              disabled={false}
              textColor='blue' />
          </Card>
        </View>
      </Modal>


      <Modal visible={showWrongGuessModal} transparent={true}>
        <View style={styles.modalContent}>
          <Card style={styles.modalCardTwo}>
            <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Hello {userName} You have chosen {userNumber}</Text>
            <Text style={styles.textStyle}>That's not my number</Text>
            <Text style={styles.textStyle}>{isGuessHigher ? "Guess Lower" : "Guess Higher"}</Text>
            <Text style={styles.textStyle}>You have {attemptsLeft} attempts left </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                onPress={handleDone}
                title="I'm done"
                disabled={false}
                textColor='red' />
              <Button
                onPress={handleGuessAgain}
                title='Let Me Guess Again'
                disabled={attemptsLeft <= 0}
                textColor='blue' />
            </View>

          </Card>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCardOne: {
    width: 300,  // 80% of the screen width
    height: '20%',
  },
  modalCardTwo: {
    width: 300,  // 80% of the screen width
    height: '40%',
  },
  textContainer: {
    marginTop: 10,
  },
  textStyle: {
    fontSize: 18, // Font size
    textAlign: 'center', // Center text
    marginVertical: 5, // Margin vertical for spacing
    fontWeight: 'bold', // Bold font weight
    color: 'navy', // Text color
  },
  buttonContainer: {
    justifyContent: 'space-around', // Space out buttons evenly
    width: '100%', // Take the full width of the card
  }

})