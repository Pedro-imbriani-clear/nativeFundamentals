import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  render() {
    let nome = 'Pedro'
    let img = 'https://esportefitness.com/wp-content/uploads/2020/11/thumbnail_image0-696x459.jpg'
    return (
      <View >
        <Text>Ola Mundo</Text>
        <Text>Meu primeiro app</Text>
        <Text style={{ color: 'red', fontSize: 25, margin: 12 }}>Seja um programador</Text>
        <Image
          source={{ uri: 'https://nutrata.com.br/wp-content/uploads/2023/03/Banner-Blog-1-1536x1024.jpg.webp' }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontSize: 30 }}>
          {nome}
        </Text>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300 }}
        />

      </View>
    )
  };
}
export default App