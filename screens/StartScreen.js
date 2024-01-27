import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField';
import Card from '../components/Card';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import GameScreen from './GameScreen';
import Colors from '../Colors';

export default function StartScreen({ userName, setUserName, userNumber, setUserNumber,
    attemptsLeft, setAttemptsLeft, generatedNumber, setCurrentScreen, setIsGameWon }) {

    const [isGuessHigher, setIsGuessHigher] = useState(false)
    const [isGuessCorrect, setIsGuessCorrect] = useState(false)
    const [userNameError, setUserNameError] = useState('');
    const [userNumberError, setUserNumberError] = useState('');
    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleConfirm() {
        if (!validateUserName(userName) && !validateUserNumber(userNumber)) {
            setUserNameError('Please enter a valid name.');
            setUserNumberError('Please enter a valid number.');
        } else if (!validateUserName(userName)) {
            setUserNameError('Please enter a valid name.');
            setUserNumberError('')
        } else if (!validateUserNumber(userNumber)) {
            setUserNumberError('Please enter a valid number.');
            setUserNameError('')
        } else {
            // when the confirm is successfully clicked
            setUserNameError('')
            setUserNumberError('')
            // determine if user guesses the correct number
            checkGuess()
            // set GameScreen modal visible
            setIsModalVisible(true);
            // because the user leaves the StartScreen
            setIsRobotChecked(false);
        }
    }

    function checkGuess() {
        const num = parseInt(userNumber, 10);
        console.log(userNumber, generatedNumber); // for test
        if (num === generatedNumber) {
            setIsGuessCorrect(true);
            setIsGameWon(true);
        } else {
            setIsGuessCorrect(false)
            if (num > generatedNumber) {
                setIsGuessHigher(true);
            } else {
                setIsGuessHigher(false);
            }
            // each time Confirm button is clicked, adjust attemptsLeft (decrement by 1)          
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    // Guess again (back to StartScreen)
    function handleGuessAgain() {
        setIsModalVisible(false);
        setCurrentScreen('StartScreen')
    }

    // when the game is over, go to the FinishScreen
    // 1. the user enters the correct number; 2. exceed the maximum attempts
    function handleDone() {
        setIsModalVisible(false);
        setCurrentScreen('FinishScreen');
    }

    // valid name: non-numeric and more than 1 character
    // the isNaN function is used to determine whether a value is an illegal number (Not-a-Number).
    function validateUserName(name) {
        return typeof name == 'string' && name.trim().length > 1 && isNaN(name);
        // Check if name is a string, has more than 1 character, and does not contain numbers (use regex)
        // return typeof name === 'string' && name.trim().length > 1 && !/\d/.test(name);
    }

    // valid number: between 1020 and 1029 (inclusive)
    function validateUserNumber(number) {
        const num = parseInt(number, 10)
        return !isNaN(num) && num >= 1020 && num <= 1029
    }

    // "Reset" button: clear all the input fields and checkbox
    function handleReset() {
        setUserName('')
        setUserNameError('')
        setUserNumber('')
        setUserNumberError('')
        setIsRobotChecked(false)
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.titleStyle}>Guess My Number</Text>
            <Card style={styles.cardStyle}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Name</Text>
                    <InputField
                        value={userName}
                        onChangeText={(name) => { setUserName(name) }}
                        placeholder='e.g. Esther'
                        keyboardType='default'
                    />
                    {userNameError ? <Text style={styles.errorMessageStyle}>{userNameError}</Text> : null}
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Enter a Number</Text>
                    <InputField
                        value={userNumber}
                        onChangeText={(num) => { setUserNumber(num) }}
                        placeholder='e.g. 1020'
                        keyboardType='numeric'
                    />
                    {userNumberError ? <Text style={styles.errorMessageStyle}>{userNumberError}</Text> : null}
                </View>

                <CheckBox
                    isSelected={isRobotChecked}
                    onCheckboxPress={() => { setIsRobotChecked(!isRobotChecked) }}
                    label='I am not a robot'
                />

                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={handleReset} disabled={false} textColor={Colors.resetButton} />
                    <Button title="Confirm" onPress={handleConfirm} disabled={!isRobotChecked} textColor={Colors.confirmButton} />
                </View>
            </Card>

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
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 60,
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 40,
    },
    textStyle: {
        fontSize: 20,
        color: Colors.text,
    },
    errorMessageStyle: {
        fontSize: 15,
        color: Colors.errorMessage,
    },
    textContainer: {
        margin: 20,
    },
    buttonContainer: {
        flexDirection: 'row', // align buttons in a row
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    cardStyle: {
        width: 300,
        height: 400,
        justifyContent: 'space-evenly',
    }
})