import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

const style = StyleSheet.create({
  area: {
    marginTop: 40
  },
  textoPrincipal:{
    fontSize:40,  
    color:'#ff0000',
    textAlign:'center'
  },

});
class App extends Component {

  render() {

    return (
      <View style={style.area} >
        <Text style={style.textoPrincipal}>Ola Mundo1</Text>
        <Text  >Ola Mundo2</Text>
        <Text >Ola Mundo3</Text>
        <Text style={[style.textoPrincipal, style.area]} >Ola Mundo4</Text>
      </View>
    )
  };
}

export default App