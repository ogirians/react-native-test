import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

class Pemain extends Component {
    render(){
        return (
            <View style={{marginBottom: 20}}>
                <Text>nama : {this.props.nama}</Text>
                <Text>alamat : {this.props.alamat}</Text>
                <Text>telepon : {this.props.telepon}</Text>
            </View>
        )
    }
}


export default class Props1 extends Component {
  render() {
    return (
      <View>
        <Pemain nama="linonel" alamat="manyar" telepon="281932">Props1</Pemain>
        <Pemain nama="robnaldo" alamat="genteng" telepon="23">Props1</Pemain>
        <Pemain nama="bona" alamat="tidar" telepon="21">Props1</Pemain>
      </View>
    )
  }
}

const styles = StyleSheet.create({})