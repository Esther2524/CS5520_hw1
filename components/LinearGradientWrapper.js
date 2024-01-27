import { StyleSheet, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Colors';

export default function LinearGradientWrapper({ children }) {
    return (
        <View style={styles.screen}>
            <LinearGradient
                colors={[Colors.linearColorStart, Colors.linearColorEnd]}
                style={styles.background}
            >
                {children}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
})