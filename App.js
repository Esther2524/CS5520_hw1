import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import StartScreen from './screens/StartScreen';
import FinishScreen from './screens/FinishScreen';
import LinearGradientWrapper from './components/LinearGradientWrapper';

export default function App() {
  // notes:
  // These state variables are shared between the StartScreen and FinishScreen.
  // The StartScreen is responsible for allowing the user to interact and modify these state variables, 
  // while the FinishScreen needs access to these variables to display results and allow restarting the game.
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [generatedNumber, setGeneratedNumber] = useState(
    Math.floor(Math.random() * 10) + 1020
  );
  const [currentScreen, setCurrentScreen] = useState('StartScreen'); // Screen state
  const [isGameWon, setIsGameWon] = useState(false)


  // restart the entire game
  function restartGame() {
    setUserName('');
    setUserNumber('');
    setGeneratedNumber(Math.floor(Math.random() * 10) + 1020);
    setAttemptsLeft(3);
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
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
            generatedNumber={generatedNumber}
            setCurrentScreen={setCurrentScreen}
            setIsGameWon={setIsGameWon}
          />
        )}

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
