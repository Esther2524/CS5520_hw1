import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField';
import Card from '../components/Card';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';

export default function StartScreen({ userName, setUserName, userNumber, setUserNumber, displayGameScreen }) {

    const [userNameError, setUserNameError] = useState('');
    const [userNumberError, setUserNumberError] = useState('');
    // return from GameScreeb to StartScreen, this variable will be reset automatically?
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
            setUserNameError('')
            setUserNumberError('')
            console.log("game start");
            displayGameScreen();
        }
    }

    // valid name: non-numeric and more than 1 character
    // the isNaN function is used to determine whether a value is an illegal number (Not-a-Number).
    function validateUserName(name) {
        return typeof name == 'string' && name.trim().length > 1 && isNaN(name)
    }

    // valid number: between 1020 and 1029 (inclusive)
    function validateUserNumber(number) {
        const num = parseInt(number, 10)
        return !isNaN(num) && num >= 1020 && num <= 1029
    }


    function handleReset() {
        // clear all the input fields and checkbox
        setUserName('')
        setUserNameError('')
        setUserNumber('')
        setUserNumberError('')
        setIsRobotChecked(false)
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.textStyle}>Guess My Number</Text>
            <Card style={styles.card}>
                <Text style={styles.textStyle}>Name</Text>
                <InputField
                    value={userName}
                    onChangeText={(name) => { setUserName(name) }}
                    placeholder='e.g. Esther'
                    keyboardType='default'
                />
                {userNameError ? <Text style={styles.textStyle}>{userNameError}</Text> : null}

                <Text style={styles.textStyle}>Enter a Number</Text>
                <InputField
                    value={userNumber}
                    onChangeText={(num) => { setUserNumber(num) }}
                    placeholder='e.g. 1020'
                    keyboardType='numeric'
                />
                {userNumberError ? <Text style={styles.textStyle}>{userNumberError}</Text> : null}

                <CheckBox
                    isSelected={isRobotChecked}
                    onCheckboxPress={() => { setIsRobotChecked(!isRobotChecked) }}
                    label='I am not a robot'
                />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={handleReset} disabled={false} textColor='#D04848' />
                    {/* checkbox will only affect the confirm button */}
                    <Button title="Confirm" onPress={handleConfirm} disabled={!isRobotChecked} textColor='black' />
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
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold', // Bold font weight
        color: 'navy', // Text color
    },
    buttonContainer: {
        flexDirection: 'row', // Align children in a row
        justifyContent: 'space-between', // Distribute children evenly
        marginTop: 10, // Optional: provide some spacing from the above elements
    },
    card: {
        width: 300,
    }
})