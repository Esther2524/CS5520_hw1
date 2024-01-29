import { StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Colors';

export default function LinearGradientWrapper({ children }) {
    // Note:
    // This component is used to apply a linear gradient background to any child components passed into LinearGradientWrapper
    // The <LinearGradient> component from expo-linear-gradient is already a kind of View component that renders a gradient view.
    // So we do not necessarily need a <View> to wrap the <LinearGradient>.
    return (
        <LinearGradient
            colors={[Colors.linearColorStart, Colors.linearColorEnd]}
            style={styles.background}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
})