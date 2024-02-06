import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function InputField({ value, onChangeText, placeholder, keyboardType }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                // when we use TextInput, the value we receive from the user's input is always a string
                // even if the user enters numbers
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: Colors.border,
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
    },
})