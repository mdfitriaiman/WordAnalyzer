import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Text, TextInput, Button, View} from 'react-native';

export default class App extends Component { 
  constructor(){
    super();
    this.state = {
    word: '',
    consonant: 0,
    vowel: 0,
    char:0
    }
}

NoOfChar() {
  var str = this.state.word;
  var no = str.length;

  this.setState ({char:no});
}

NoOfConsonant() {
  var str1 = this.state.word;
  var conso = "bcdfghjklmnpqrstvwxyz";
  var consoCount = 0;

  for (var x=0; x<str1.length; x++){
    for(var y=0; y<conso.length; y++){
      if(str1[x]==conso[y]){
        consoCount++;
      }
      this.setState ({consonant:consoCount});
    }
  }

}

NoOfVowel() {
  var str2 = this.state.word;
  var vowel = "aeiou";
  var vowelCount = 0;

  for (var a=0; a<str2.length; a++){
    for(var b=0; b<vowel.length; b++){
      if(str2[a]==vowel[b]){
        vowelCount++;
      }
      this.setState ({vowel:vowelCount});
    }
  }

}

  render() {
    return (
    <View>
      <Text>WORD ANALYZER</Text>
        <TextInput onChangeText={word => this.setState({ word })} placeholder='Type any word'/>
        <Button onPress={() => {this.NoOfChar(), this.NoOfConsonant(), this.NoOfVowel()}} title="Analyze" />
        <Text>Word: {this.state.word}</Text>
        <Text>No.of Character: {this.state.char}</Text>
        <Text>No.of consonants: {this.state.consonant}</Text>
        <Text>No.of vowels: {this.state.vowel}</Text>
        
    </View>
      );
    }
  }

