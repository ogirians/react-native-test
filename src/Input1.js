import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class Input1 extends Component {
  state = {
    nama : ''
  }

  
  render() {
    return (
      <View>
        <Text>coba input</Text>
        <TextInput
            style={styles.inputan}
            placeholder='masukkan nama'
            keyboardType='default'
            onChangeText={(text) => this.setState({nama:text})}
        />
        <Text>halo  {this.state.nama}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    inputan : {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }
})