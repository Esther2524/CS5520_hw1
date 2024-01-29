import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField';
import Card from '../components/Card';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Colors from '../Colors';

export default function StartScreen({ userName, setUserName, userNumber, setUserNumber, checkGuess, displayModal }) {
    const [userNameError, setUserNameError] = useState('');
    const [userNumberError, setUserNumberError] = useState('');
    const [isRobotChecked, setIsRobotChecked] = useState(false);


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
            // after clicking the Confrim button, determine if the user enters the correct number
            checkGuess()
            // set GameScreen modal visible
            displayModal(true);
            // if the user leaves the StartScreen, next time they come back, the checkbox should clear
            setIsRobotChecked(false);
            // btw, we don't change the userName and userNumber entered perviously
        }
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
        const num = parseInt(number, 10);
        return !isNaN(num) && num >= 1020 && num <= 1029;
    }

    // "Reset" button: clear all the input fields and checkbox
    function handleReset() {
        setUserName('');
        setUserNameError('');
        setUserNumber('');
        setUserNumberError('');
        setIsRobotChecked(false);
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