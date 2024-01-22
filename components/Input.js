import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
  
  // a state variable named `age`, and a function to update it called `setAge`.
  const [age, setAge] = useState("24");
  const [name, setName] = useState("Esther")


  // This is a handler function that gets called whenever the text in the TextInput changes.
  // The changedText parameter represents the "latest value" of the text input field.
  // Inside this function, setText(changedText) updates the state variable text with the latest value from the input field.
  function changeNameHandler(changedName) {
    setName(changedName)
  }

  function changeAgeHandler(changedAge) {
    // console.log("User is typing:", changedAge);
    setAge(changedAge)
  }



  return (
    // The line value={text} in the TextInput component is a crucial part of managing form inputs
    // The text variable (initialized and managed by the useState hook) holds the current value of the input. 
    // This means the actual value displayed in the TextInput field is always the same as the text state variable.

    // value={text} binds the value of the input field to the `text` state variable. 
    // This means the input field displays whatever value `text` holds.
    <View>
      


      <Text>Enter Name:</Text>
      <TextInput
        placeholder='e.g. Esther'
        style={styles.input}
        onChangeText={(val) => setName(val)}
      />

      {/* another format */}
      <TextInput placeholder="e.g. Esther"
        style={styles.input}
        value={name}
        onChangeText={changeNameHandler} />

      <Text>Enter Age:</Text>
      <TextInput 
        placeholder='e.g. 24'
        style={styles.input}
        onChangeText={(val) => setAge(val)}
      />

      <Text>Name: {name}, Age: {age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  }
})

