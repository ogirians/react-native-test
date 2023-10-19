import { StyleSheet, Text, View, Image,Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();




  function Article(route) {
    const [article_data_x,setData] = useState([])
    const getAPIData = async () => {
        const url = 'https://6530a52e6c756603295edf5e.mockapi.io/api/article/list'
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }

    useEffect(() => {
      getAPIData();
    }, []);

    return (
      <View>
        {/* titlte daftar */}
        <View style={[styles.cardTitle, {marginTop: 30}]}>
          <View style={{flexDirection : 'row'}}>
            <Text style={[{color :'green',flex : 6, justifyContent :'center',padding :5, fontSize : 17, fontWeight : 'bold'}]}> Berita Terkini</Text>
          </View>
        </View>
        {/* daftar artikel terkini */}
        {/* daftar artikel terkini */}
        {
          article_data_x.length ? 
          article_data_x.map((data, index) => 
              <View        
              style={styles.menuArticleHome}
              key={index}
              >
                <View style={styles.listArticle}>
                    <View style={{flexDirection : 'row'}}>
                      <Image  
                        source={
                          {uri: data.gambar}
                        }
                        style={{width: 70,height: 70, flex :3}} 
                      />
                      <View style={{backgroundColor : '', flex:9}}>
                        <Text style={styles.listTextArticle}>
                            {data.judul}
                        </Text>
                        <Text style= {styles.listTextIsiArticle}>
                           {data.isi}
                        </Text>
                      </View>
                    </View>
                </View>
              </View>
            )
          : null
        }
      </View>
    )
  }

  function Pendaftaran() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>halman halaman Pendaftaran</Text>
      </View>
    );
  }

  function Riwayat() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>halman halaman riwayat</Text>
      </View>
    );
  
  }

  function Home({navigation}) {
    const [article_data,setData] = useState([])
    const getAPIData = async () => {
        const url = 'https://6530a52e6c756603295edf5e.mockapi.io/api/article/list'
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }

    useEffect(() => {
      getAPIData();
    }, []);

    return (
    <ScrollView>
      <View>
        {/* banner */}
        <Image
            source={require('./assets/banner1.png')}
            style={{width: 'auto',height: 200}}
        />
        {/* selamat datang */}
        <View style={[styles.cardTitle, {marginTop: 30}]}>
          <Text style={{fontSize: 25, textAlign:'center', padding: 5}}>
              Selamat Datang di 
          </Text>
          <Text style={{fontWeight : 'bold', textAlign: 'center', fontSize : 30, marginBottom : 30, color : 'green', padding: 5}}>SutomoApp</Text>
        </View>

        {/* titlte daftar */}
        <View style={[styles.cardTitle, {marginTop: 30}]}>
          <View style={{flexDirection : 'row'}}>
            <Text style={[{color :'green',flex : 6, justifyContent :'center',padding :5, fontSize : 17, fontWeight : 'bold'}]}> Pendaftaran Poli</Text>
            <TouchableOpacity style={[{flex : 6, backgroundColor : 'grey', borderRadius: 4, padding :5}]}>
              <Text style={{textAlign: 'right',color : 'white'}}>
                lihat semua.. 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* daftar poli shorcut */}
        <ScrollView
          horizontal = {true}
          style={styles.menuHome}
        >
          <View style={styles.listHome}>
              <Text style={styles.listTextHome}>
                  Poli Umum
              </Text>
          </View>
          <View style={styles.listHome}>
              <Text style={styles.listTextHome}>
                  Poli Gigi
              </Text>
          </View>
          <View style={styles.listHome}>
              <Text style={styles.listTextHome}>
                  Poli Penyakit Dalam
              </Text>
          </View>
          <View style={styles.listHome}>
              <Text style={styles.listTextHome}>
                  Poli Ortopedi
              </Text>
          </View>
          <View style={styles.listHome}>
              <Text style={styles.listTextHome}>
                  Poli Urologi
              </Text>
          </View>
        </ScrollView>
        {/* titlte daftar */}
        <View style={[styles.cardTitle, {marginTop: 30}]}>
          <View style={{flexDirection : 'row'}}>
            <Text style={[{color :'green',flex : 6, justifyContent :'center',padding :5, fontSize : 17, fontWeight : 'bold'}]}> Berita Terkini</Text>
            <TouchableOpacity style={[{flex : 6, backgroundColor : 'grey', borderRadius: 4, padding :5}]}>
              <Text 
                style={{textAlign: 'right',color : 'white'}}
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('Article', {
                    article_data: article_data,
                    otherParam: 'anything you want here',
                  });
                }}
              >
                lihat semua.. 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* daftar artikel terkini */}
        {
          article_data.length ? 
          article_data.map((data, index) => 
              <View        
              style={styles.menuArticleHome}
              key={index}
              >
                <View style={styles.listArticle}>
                    <View style={{flexDirection : 'row'}}>
                      <Image  
                        source={
                          {uri: data.gambar}
                        }
                        style={{width: 70,height: 70, flex :3}} 
                      />
                      <View style={{backgroundColor : '', flex:9}}>
                        <Text style={styles.listTextArticle}>
                            {data.judul}
                        </Text>
                        <Text style= {styles.listTextIsiArticle}>
                           {data.isi}
                        </Text>
                      </View>
                    </View>
                </View>
              </View>
            )
          : null
        }
            
      </View>
    </ScrollView>
    );
  }

  const sutomoApp = () => {

    return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen 
                  name="Home" 
                  component={Home} 
                  options={{
                      title: ('Home'),
                      headerStyle : {
                          backgroundColor : 'lightGray'
                      },
                  headerRight : () => (
                      <View style={{flexDirection : 'row'}}>
                          <Image
                              source={require('./assets/rsds2.png')}
                              style={{width: 25,height: 25, marginRight: 20}}
                          />
                      </View>
                  )
                  }}
                
              />
                
                  
              <Drawer.Screen name="Article" component={Article} />
              <Drawer.Screen name="Pendaftaran" component={Pendaftaran} />
              <Drawer.Screen name="Riwayat" component={Riwayat} />
          </Drawer.Navigator>
      </NavigationContainer>
    )
  }

export default sutomoApp

const styles = StyleSheet.create({
    menuHome : {
      // width : 150,
      // height : 150,
      backgroundColor : 'lightgrey',
      flexDirection : 'row',
      // alignSelf : 'center',
      marginHorizontal : 10,
      marginTop : 2,
      borderRadius : 10
    },
    menuArticleHome : {
      // width : 150,
      // height : 150,
      backgroundColor : 'lightgrey',
      // flexDirection : 'column',
      // alignSelf : 'center',
      marginHorizontal : 10,
      marginTop : 2,
      borderRadius : 10
    },
    listHome : {
      padding : 20,
      width : 200,
      height : 200,
      backgroundColor : 'green',
      margin : 30,
      borderRadius : 20,
      justifyContent : 'center',
      alignItems : 'center',
      elevation : 4
    },
    listArticle : {
      flex : 1,
      padding : 20,
      flexWrap : 'wrap',
      // width : 'auto',
      // height : 200,
      backgroundColor : 'green',
      margin : 10,
      borderRadius : 10,
      // justifyContent : 'center',
      // alignItems : 'center',
      elevation : 4
    },
    listTextHome : {
      fontSize : 30,
      fontWeight : 'bold',
      textAlign : 'center',
      color : "white",
    },
    listTextArticle : {
      fontSize : 15,
      fontWeight : 'bold',
      // textAlign : 'center',
      color : "white",
      marginLeft : 10,
      flexWrap : 'wrap'
    },
    listTextIsiArticle : {
      fontSize : 13,
      // fontWeight : 'bold',
      // textAlign : 'center',
      color : "white",
      marginLeft : 10
    },


    titleText : {
      fontSize : 15,
      fontWeight : 'bold',
      textAlign : 'center',
      color : "white",
    },
    cardTitle : {
      paddingHorizontal :20  ,
      // width : ,
      // height : 70,
      paddingVertical : 15,
      backgroundColor : 'lightgrey',
      marginHorizontal : 10,
      marginVertical : 2,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'flex-start',
      // elevation : 4

    }

    
})

