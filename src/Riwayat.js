import { StyleSheet, Text, View, Image,Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Riwayat() {
  const [article_data_x,setData] = useState([])
  const getAPIData = async () => {
      const url = 'https://6530a52e6c756603295edf5e.mockapi.io/api/article/daftar'
      let result = await fetch(url);
      result = await result.json();
      setData(result)
  }

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      {/* titlte daftar */}
      <View style={[styles.cardTitle, {marginTop: 30}]}>
        <View style={{flexDirection : 'row'}}>
          <Text style={[{color :'green',flex : 6, justifyContent :'center',padding :5, fontSize : 17, fontWeight : 'bold'}]}> Riwayat Pendaftaran</Text>
        </View>
      </View>
    
      {/* daftar artikel terkini */}
      {
        article_data_x.length ? 
        article_data_x.map((data, index) => 
            <View        
            style={styles.menuArticleHome}
            key={index}
            >
              <View style={styles.listArticle}>
                  <View style={{flexDirection : 'column'}}>
                    <View >
                      <Text style={styles.listTextArticle}>
                          nama :{data.nama}
                      </Text>
                      <Text style= {styles.listTextIsiArticle}>
                          umur : {data.umur}
                      </Text>
                      <Text style= {styles.listTextIsiArticle}>
                          alamat : {data.alamat}
                      </Text>
                      <Text style= {styles.listTextIsiArticle}>
                         poli : {data.poli}
                      </Text>
                    </View>
                  </View>
              </View>
            </View>
          )
        : null
      }
    </ScrollView>
  )
}

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