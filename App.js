import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import StartScreen from './screens/StartScreen';
import FinishScreen from './screens/FinishScreen';
import GameScreen from './screens/GameScreen';
import LinearGradientWrapper from './components/LinearGradientWrapper';

export default function App() {
  // notes:
  // These state variables are shared between the StartScreen, GameScreen, and FinishScreen.
  // the FinishScreen needs access to these variables to display results and allow restarting the game.
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [generatedNumber, setGeneratedNumber] = useState(
    Math.floor(Math.random() * 10) + 1020
  );
  const [currentScreen, setCurrentScreen] = useState('StartScreen'); // Screen state
  // for GameScreen
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGuessHigher, setIsGuessHigher] = useState(false)
  const [isGuessCorrect, setIsGuessCorrect] = useState(false)
  // for FinishScreen
  const [isGameWon, setIsGameWon] = useState(false);
  
  // console.log(generatedNumber); // just for test

  // the logic of the entire game
  function checkGuess() {
    console.log(`user input: ${userNumber}, correct number: ${generatedNumber}`); // just for test
    const num = parseInt(userNumber, 10);
    if (num === generatedNumber) {
      setIsGuessCorrect(true);
      setIsGameWon(true);
    } else {
      setIsGuessCorrect(false);
      if (num > generatedNumber) {
        setIsGuessHigher(true);
      } else {
        setIsGuessHigher(false);
      }
      // each time Confirm button is clicked, adjust attemptsLeft (decrement by 1)          
      setAttemptsLeft(attemptsLeft - 1);
    }
  };

  // For StartScreen:
  // dislay the GameScreen Modal
  function displayModal() {
    setIsModalVisible(true);
  }

  // For GameScreen: 
  // handle "Let Me Guess Again" Button (back to StartScreen)
  function handleGuessAgain() {
    setIsModalVisible(false);
    setCurrentScreen('StartScreen');
  }

  // For GameScreen:
  // handle "I'm done" Button. when the game is over, go to the FinishScreen
  // two situations: 1. the user enters the correct number; 2. exceed the maximum attempts
  function handleDone() {
    setIsModalVisible(false);
    setCurrentScreen('FinishScreen');
  }


  // For FinishScreen: restart the entire game
  function restartGame() {
    setUserName('');
    setUserNumber('');
    setGeneratedNumber(Math.floor(Math.random() * 10) + 1020);
    setAttemptsLeft(3);
    setIsGuessCorrect(false);
    setIsGameWon(false);
    setCurrentScreen('StartScreen');
  };



  return (
    <LinearGradientWrapper>
      <View style={styles.screen}>
        {currentScreen == 'StartScreen' && (
          <StartScreen
            userName={userName}
            setUserName={setUserName}
            userNumber={userNumber}
            setUserNumber={setUserNumber}
            checkGuess={checkGuess}
            displayModal={displayModal}
          />
        )}

        {/* Place GameScreen in the App.js, not conditionally render it. */}
        <GameScreen
          isModalVisible={isModalVisible}
          userName={userName}
          userNumber={userNumber}
          attemptsLeft={attemptsLeft}
          isGuessCorrect={isGuessCorrect}
          isGuessHigher={isGuessHigher}
          handleDone={handleDone}
          handleGuessAgain={handleGuessAgain}
        />

        {currentScreen == 'FinishScreen' && (
          <FinishScreen
            userNumber={userNumber}
            handleRestart={restartGame}
            isGameWon={isGameWon} />
        )}

      </View>
    </LinearGradientWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});
