import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function PressedButton({ navigation, onPress, children, customizedStyle }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) =>
            [defaultStyle, customizedStyle, pressed && styles.press]}
        >
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    defaultStyle: {

    },
    press: {

    }

})