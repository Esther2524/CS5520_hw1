import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function Card({ children, style }) {
    // Note:
    // 1. 'children' is a special property that allows us to pass components as data to other components.
    // children will be whatever is placed between <Card> and </Card> when the component is used. 
    // 2. The style prop allows for additional styling to be applied from the parent component, 
    // adding more customization on top of the base card style defined in styles.
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        elevation: 8, // elevation for Android
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.shadow,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginHorizontal: 4,
        marginVertical: 3,
        maxWidth: 300,
        minHeight: 100,
        backgroundColor: Colors.card,
        padding: 10, 
    },
})