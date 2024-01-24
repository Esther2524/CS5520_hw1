import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'


export default function Input({ inputHandler, modalVisible, dismissModal }) {

  const [text, setText] = useState("")

  //callback handler
  function changeTextHandler(changedText) {
    console.log("user is typing:", changedText)
    setText(changedText)
  }


  function confirmHandler() {
    inputHandler(text);

  }

  function cancelHandler() {
    // hide the model
    dismissModal()
  }



  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            require("../assets/google_img.png")
          }
        />
    
        <Image />

        <TextInput
          placeholder='Type something'
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler} />

        <View style={styles.buttonContainer}>

   
          <Button style={{}} title="Cancel" onPress={cancelHandler} />
          <Button title="Submit" onPress={confirmHandler} />
        </View>



      </View>

    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  image: {
    width: "95%",
    height: "30%",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {

  }

})

