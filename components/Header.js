import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {
    console.log(props)
  return (
    <View>
      <Text>Welcome to {props.name} {props.version}</Text>
      {props.children}
    </View>
  )
}

// rnf

