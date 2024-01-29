import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import LinearGradientWrapper from '../components/LinearGradientWrapper'
import Colors from '../Colors'

export default function GameScreen({ isModalVisible, userName, userNumber, attemptsLeft,
  isGuessCorrect, isGuessHigher, handleDone, handleGuessAgain }) {
  // Notes:
  // 1. The Modal component in React Native covers the whole screen by default, and its content is typically aligned to the top. 
  // 2. The LinearGradient should be used directly inside the Modal. It will serve as the background for all the content of the modal.

  return (
    <Modal visible={isModalVisible}>
      <LinearGradientWrapper>
        <View style={styles.modalContent}>
          {isGuessCorrect ? (
            <Card style={styles.cardStyleForCongrats}>
              <Text style={styles.textStyle}>Congrats {userName}! You won!</Text>
              <Button
                onPress={handleDone}
                title='Thank you!'
                disabled={false}
                textColor={Colors.normalButton} />
            </Card>
          ) : (
            <Card style={styles.cardStyle}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Hello {userName}</Text>
                <Text style={styles.textStyle}>You have chosen {userNumber}</Text>
                <Text style={styles.textStyle}>That's not my number!</Text>
                {/* the message "Guess lower!" or "Guess higher!" is only displayed when attemptsLeft is greater than 0 */}
                {attemptsLeft > 0 && (
                  <Text style={styles.textStyle}>
                    {isGuessHigher ? "Guess lower!" : "Guess higher!"}
                  </Text>
                )}
                <Text style={styles.textStyle}>
                  {attemptsLeft === 0 ? "You have no attempts left!" : `You have ${attemptsLeft} attempts left!`}
                </Text>
              </View>
              <Button
                onPress={handleDone}
                title="I'm done"
                disabled={false}
                textColor={Colors.doneButton} />
              <Button
                onPress={handleGuessAgain}
                title='Let Me Guess Again'
                disabled={attemptsLeft <= 0}
                textColor={Colors.normalButton} />
            </Card>
          )}
        </View>
      </LinearGradientWrapper>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // to center the card
  },
  textContainer: {
    margin: 10,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: 'bold',
    color: Colors.text,
  },
  cardStyle: {
    alignItems: 'center',
    width: 300,
  },
  cardStyleForCongrats: {
    alignItems: 'center',
    width: 300,
    height: 100,
  }
})