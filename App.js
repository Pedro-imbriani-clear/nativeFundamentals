import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ola Mundo</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App