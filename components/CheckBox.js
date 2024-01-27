import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import Colors from '../Colors';

export default function CheckBox({ isSelected, onCheckboxPress, label }) {
    return (
        <View style={styles.checkboxContainer}>
            <Checkbox
                style={styles.checkbox}
                value={isSelected}
                onValueChange={onCheckboxPress}
                color={isSelected ? Colors.checkBox : undefined}
            />

            <Text style={styles.label}>
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        margin: 20,
    },
    checkbox: {
        margin: 5,
    },
    label: {
        margin: 8,
        fontSize: 16,
    }
})