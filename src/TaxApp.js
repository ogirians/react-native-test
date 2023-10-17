import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, { Component } from 'react'


export default class TaxApp extends Component {
    state = {
        nama : '',
        divisi : '',
        gaji : '',
        total_jumlah_bayar : '',
        tarif_ptkp : '',
        show_hasil : false
    }

    resetState = () => {
        this.setState({
            nama : '',
            divisi : '',
            gaji : '',
            total_jumlah_bayar : '',
            tarif_ptkp : '',
            show_hasil : false
        });
    }
    

    hitung_tarif = (gaji) => {
        gaji_tahun = gaji * 12 / 12;
        tarif = 0;

        if (gaji_tahun <= 4500000)
        tarif = 1;
        if (gaji_tahun >= 4500001 && gaji_tahun <= 50000000)
        tarif = 2;
        if (gaji_tahun >= 5000001 && gaji_tahun <= 60000000)
        tarif = 3;
        if (gaji_tahun > 6000001)
        tarif = 5;

        return tarif;
    }

    jumlah_bayar =  (gaji) => { 
        // alert(gaji);
        let rata2_gaji = gaji * 12 / 12; 
        let tarif = this.hitung_tarif(gaji)
        let jumlah = rata2_gaji * tarif/100

        // alert(tarif)
        this.setState({total_jumlah_bayar : jumlah});
        this.setState({tarif_ptkp : tarif});
        this.setState({show_hasil : true});
        return jumlah;
    }


  render() {
    return (
      <View>
        <Text style={styles.judul_app}>TaxApp</Text>

        <View style={{marginBottom : 10}}>

            <TextInput
                style={styles.inputan}
                placeholder="masukkan nama"
                keyboardType='default'
                onChangeText={(text) => this.setState({nama : text})}
            />
            <TextInput
                style={styles.inputan}
                placeholder="masukkan divisi"
                keyboardType='default'
                onChangeText={(text) => this.setState({divisi : text})}
            />
            <TextInput
                style={styles.inputan}
                placeholder="masukkan gaji"
                keyboardType='default'
                onChangeText={(text) => this.setState({gaji : text})}
            />
        </View>

        <Button
            onPress={() => this.jumlah_bayar(this.state.gaji)}
            title='hitung ptkp'
        />
        <View style={{marginBottom :20}}></View>

        <Button
            onPress={() => this.resetState()}
            title='reset'
            color={'red'}
        />

        <View style={[styles.hasil, {display : this.state.show_hasil ? 'flex' : 'none'}]}>
            <Text style={styles.judul_hasil}>HASIL PERHITUNGAN</Text>
            <Text>nama :  {this.state.nama}</Text>
            <Text>divisi :  {this.state.divisi}</Text>
            <Text>gaji per bulan :  {this.state.gaji}</Text>
            <Text>gaji setahun :  {this.state.gaji * 12}</Text>
            <Text>tarif ptkp :  {this.state.tarif_ptkp + " %"}</Text>
            <Text>jumlah bayar ptkp :  {this.state.total_jumlah_bayar}</Text>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    judul_app : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign: 'center',
        marginBottom : 10
    },
    inputan : {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },

    judul_hasil : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign: 'center',
        marginBottom : 10
    },

    hasil : {
        margin :20,
        display : 'flex'
    }
})