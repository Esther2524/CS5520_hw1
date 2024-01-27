import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function Card({ children, style }) {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        elevation: 3, // elevation for Android
        shadowOffset: { width: 4, height: 4 },
        shadowColor: Colors.shadow,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 3,
        maxWidth: 300,
        minHeight: 100,
        backgroundColor: Colors.card,
        padding: 10, 
    },
})