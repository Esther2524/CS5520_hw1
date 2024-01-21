import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
  // useState

  const [text, setText] = useState("");

  function changeTextHandler(changedText) {
    // console.log("User is typing:", changedText);
    setText(changedText)
  }

  return (
    <View>
      <TextInput placeholder="Type something"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler} />
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    width: 130,
  },
})

