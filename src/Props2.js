import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pemain = (props) => {
    return (
        <View style={{marginBottom: 20}}>
            <Text>nama : {props.nama.depan}</Text>
            <Text>alamat : {props.alamat}</Text>
            <Text>telepon : {props.telepon}</Text>
        </View>
    )
}

const Props2 = () => {
  return (
    <View>
        <Pemain nama={{depan : 'cristiano'}} alamat="manyar" telepon="281932">Props1</Pemain>
        <Pemain nama="robnaldo" alamat="genteng" telepon="23">Props1</Pemain>
        <Pemain nama="bona" alamat="tidar" telepon="21">Props1</Pemain>
        <Pemain nama="bon2a" alamat="tidar" telepon="21">Props1</Pemain>
    </View>     
  )
}

export default Props2

const styles = StyleSheet.create({})