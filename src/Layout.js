import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class layout extends Component {
  render() {
    return (
      <View>
        <Text>BELAAJAR LAYOUTING</Text>
        <Text>macam - macam lampu vertikalss</Text>
        <View style = {styles.flek}>
            <View style={styles.lampuMerah}></View>
            <View style={styles.lampuKuning}></View>
            <View style={styles.lampuHijau}></View>
        </View>
        <Text>macam - macam lampu vertikalss -reverse</Text>
        <View style = {{flexDirection : 'row-reverse'}}>
            <View style={styles.lampuMerah}></View>
            <View style={styles.lampuKuning}></View>
            <View style={styles.lampuHijau}></View>
        </View>
        <Text>macam - macam lampu horizontal</Text>
        <View style>
            <View style={styles.lampuMerah}></View>
            <View style={styles.lampuKuning}></View>
            <View style={styles.lampuHijau}></View>
        </View>
        <Text>macam - macam lampu horizontal-reverse</Text>
        <View style = {{flexDirection : 'column-reverse'}}>
            <View style={styles.lampuMerah}></View>
            <View style={styles.lampuKuning}></View>
            <View style={styles.lampuHijau}></View>
        </View>
        <Text>macam - macam lampu align item</Text>
        <View style = {{alignItems: 'center'}}>
            <View style={styles.lampuMerah}></View>
            <View style={styles.lampuKuning}></View>
            <View style={styles.lampuHijau}></View>
        </View>
        <View style = {{alignItems: 'flex-end'}}>
            <View style={[styles.lampuMerah , {alignSelf : 'center', width: 45}]}></View>
            <View style={styles.lampuKuning}></View>
            <View style={styles.lampuHijau}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    flek : {
        flexDirection : 'row',
    },
    lampuMerah: {
        backgroundColor:'red',
        width : 20,
        height : 20,
    },
    lampuHijau: {
        backgroundColor:'green',
        width : 20,
        height : 20,
    },
    lampuKuning: {
        backgroundColor:'yellow',
        width : 20,
        height : 20
    }
})