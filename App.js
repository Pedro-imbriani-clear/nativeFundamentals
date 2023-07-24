import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
class App extends Component {

  render() {

    return (
      <View style={{backgroundColor:'#222',flex:1}}>
        <View style={{height:45, backgroundColor: '#222' }}></View>
        <View style={{ flex:2, backgroundColor: 'green' }}></View>
        <View style={{height:45, backgroundColor: '#222' }}></View>
      </View>
    )
  };
}

export default App