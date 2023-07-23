import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: ''
    }
    this.entrar = this.entrar.bind(this)
  }
  entrar(){
    this.setState({
      nome: 'Pedro Henrique'
    })
  }
  render() {

    return (
      <View >
        <Text style={{ margin: 15, fontSize: 30 }}>Ola Mundo</Text>
        <Button title='entrar' onPress={this.entrar}/>
        <Text style={{ margin: 15, fontSize: 30, color: 'red', textAlign: 'center' }}>
          {this.state.nome}
        </Text>

      </View>
    )
  };
}

export default App