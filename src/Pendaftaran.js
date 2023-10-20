import { StyleSheet,Button, Text,TextInput, View, Image,Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Pendaftaran() {
  const [pasien,setPasien] = useState('');
  
  const postDaftar = async () => {
    const data = {
        nama : pasien.nama,
        alamat : pasien.alamat,
        umur : pasien.umur,
        poli : pasien.poli
        // nama :   "test222",
        // alamat : "test222",
        // umur :   "test222",
        // poli :   "test222"
    }
    data_json = JSON.stringify(data)

    const url = 'https://6530a52e6c756603295edf5e.mockapi.io/api/article/daftar'

    let result = await fetch(url, {
        method : "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        body : data_json,
    })

    result = result.json();
    alert(data_json)

  }
  
  tampilkan = () => {
    alert(JSON.stringify(pasien))
  }
  return (
    <View>
         {/* titlte daftar */}
        <View style={[styles.cardTitle, {marginTop: 30}]}>
          <View style={{flexDirection : 'row'}}>
            <Text style={[{color :'green',flex : 6, justifyContent :'center',padding :5, fontSize : 17, fontWeight : 'bold'}]}> Pendaftaran</Text>
          </View>
        </View>
        <View        
        style={styles.menuPendaftaranHome}
        >
            <TextInput 
                style={styles.field}
                placeholder='Masukkan Nama'
                onChangeText={(text) => setPasien({...pasien, nama : text})} 
                >
            </TextInput>
            <TextInput 
                style={styles.field}
                placeholder='Masukkan Alamat'
                onChangeText={(text) => setPasien({ ...pasien, alamat: text })} 
                >
            </TextInput>
            <TextInput 
                style={styles.field}
                placeholder='Masukkan Umur'
                onChangeText={(text) => setPasien({ ...pasien, umur: text })}
                >
            </TextInput>
            <TextInput 
                style={styles.field}
                placeholder='Masukkan Poli'
                onChangeText={(text) => setPasien({ ...pasien, poli: text })}
                >
            </TextInput>
           
            {/* <Button
                onPress={() => this.tampilkan()}
                title = 'tampilkan'
            ></Button> */}
        </View>
        <View style={{marginTop :20, marginHorizontal:10}}>
            <Button
                onPress={postDaftar}
                title = 'simpan'
                style = {{borderRadius : 20}}
            >
        
            </Button>
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    titleText : {
        fontSize : 15,
        fontWeight : 'bold',
        textAlign : 'center',
        color : "white",
    },
    cardTitle : {
        paddingHorizontal :20  ,
        paddingVertical : 15,
        backgroundColor : 'lightgrey',
        marginHorizontal : 10,
        marginVertical : 2,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'flex-start',
    },
    menuPendaftaranHome : {
        backgroundColor : 'lightgrey',
        marginHorizontal : 10,
        marginTop : 15,
        borderRadius : 10
      },
    field : {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        margin: 10,
        backgroundColor: '#fff',
    }
})