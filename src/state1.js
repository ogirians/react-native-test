import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class state1 extends Component {
    state = {
        nama : 'messi',
        negara : 'argentina',
        detil : {umur : '30', klub : 'miami'}
    }

    setGoat = () => {
        this.setState({nama : 'cristiano'});
        this.setState({negara : 'portigal'});
        this.setState({detil : {umur : '38', klub : 'alnassr'}})
    }

  render() {
    return (
      <View>
        <Text>Belajar state</Text>
        <View></View>
        <Text>Goat adalah : {this.state.nama}</Text>
        <Text>Negara : {this.state.negara}</Text>
        <Text>umur goat : {this.state.detil.umur}</Text>
        <Text>klub goat : {this.state.detil.klub}</Text>
        <Button
           onPress={() => this.setGoat()}
           title='goat ssebenarnya'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})