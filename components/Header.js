import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {
  return (
    <View>
      <Text>Welcome to {props.name} (version: {props.version})</Text>
      {props.children}
    </View>
  )
}

// rnf

