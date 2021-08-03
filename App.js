import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import * as Speech from "expo-speech"

export default class App extends React.Component {

  state = {
    inputWords: ""
  }

  speak() {
    // const words = "Hello everyone"
    // Speech.speak(words)
    
    const words = this.state.inputWords
    Speech.speak(words)
  }

  render() {
    return (
      <View style={styles.container}>


        <TextInput
          placeholder="Write some words"
          onChangeText={text=>this.setState({inputWords: text})}
        />
        
        <Button
          title="Say Something"
          onPress={()=>{this.speak()}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
