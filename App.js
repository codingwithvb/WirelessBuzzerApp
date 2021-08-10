import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playAudio = async() => {
    await Audio.Sound.createAsync(
      {
        uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
      },
      {
        shouldPlay:true
      }
    )
  };
  render() {
  return(
    <TouchableOpacity style={{backgroundColor:"blue", borderRadius:200, width:150, height:150, marginLeft:100,alignItems:"center", justifyContent:"center"}}
    onPress={this.playAudio}>
    <Text style={{fontSize:20, fontWeight:"bold", fontStyle:"Calibri"}}>
    Press Here!
    </Text>
    </TouchableOpacity>
  );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}
