import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';

export default function Home({ navigation, route }) {



  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([{"halaman": "AsupanMpasi", "id": "1", "image": "https://simonev.okeadmin.com/datafoto/a0003ce4349b2c7d4eff29b6d51a37075a774c47.png", "judul": "Asupan  MPASI", "warna": "#FE9A3B33"}, {"halaman": "AsupanAsi", "id": "2", "image": "https://simonev.okeadmin.com/datafoto/4f8b42e79f74f6c6d5a45865b9d5d9ca20a2a33e.png", "judul": "Asupan ASI", "warna": "#FF96A533"}, {"halaman": "StatusGizi", "id": "3", "image": "https://simonev.okeadmin.com/datafoto/43f86c8c8d15892eb4fbbd6466051168022d3918.png", "judul": "Status Gizi", "warna": "#FFA72633"}, {"halaman": "TanyaJawab", "id": "4", "image": "https://simonev.okeadmin.com/datafoto/abf1442b27cc406e0320e251e6ac57ba62d2128a.png", "judul": "Tanya Jawab", "warna": "#FFE29433"}, {"halaman": "Artikel", "id": "5", "image": "https://simonev.okeadmin.com/datafoto/655b4e3a81f3c760a001b1199ccb38aa6c1e63c4.png", "judul": "Artikel", "warna": "#CCE0F133"}, {"halaman": "Video", "id": "6", "image": "https://simonev.okeadmin.com/datafoto/9c25ee17076411e53acbefd97c3a40240642013a.png", "judul": "Video", "warna": "#C92B7433"}, {"halaman": "Resep", "id": "7", "image": "https://simonev.okeadmin.com/datafoto/30eea7e269ad623a515074c7b6ef65680b2bed84.png", "judul": "Resep MPASI", "warna": "#FFCDBC33"}, {"halaman": "Faq", "id": "8", "image": "https://simonev.okeadmin.com/datafoto/87a8a923f8334cde6a8fab507ea83964a76248d1.png", "judul": "FAQ", "warna": "#9CC44533"}, {"halaman": "GameKuis", "id": "9", "image": "https://simonev.okeadmin.com/datafoto/98b60a5ebe438acf92a114070e89ed0a52d11754.png", "judul": "Game Kuis", "warna": "#56D8D833"}]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});

  const _getTransaction = async () => {


    await getData('user').then(u => {
      setUser(u);
    })

    await axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });

 
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item.modul, item)}>
        <View style={{
          flex: 1,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.secondary,
          // backgroundColor: colors.white,
          margin: 5,
          height: windowHeight / 8,
        }}>

          <Image source={{
            uri: item.image
          }} style={{
            // flex: 1,
            width: 40,
            height: 40,
            resizeMode: 'contain'
          }} />
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[600],
            fontSize: 8,
            color: colors.secondary,
            textAlign: 'center'
          }}>{item.judul}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }


  return (

    <ImageBackground source={require('../../assets/homebg.png')} style={{
      flex:1,
      width:"100%",
      height:"100%",
  
      backgroundColor:colors.black,

    

    }}>

    {/* HEADERS */}
    <View style={{
      flexDirection:"row",
      backgroundColor:"white",
      padding:10,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
      justifyContent:'space-between'


    }}>

    <View>
      <Text style={{
        fontFamily:fonts.primary[800]

      }}>Selamat Datang,</Text>
      <Text style={{fontFamily:fonts.primary[400]}}>
        Fadhlan Himawan
      </Text>
    </View>

    <View>
      <TouchableNativeFeedback >
        <View style={{flexDirection:"row", padding:10, borderWidth:1, borderRadius:50, borderColor:"#cccccc"}}>
        <Text style={{
          fontFamily:fonts.primary[600],
          marginRight:10,

        }}>
          Logout
        </Text>
          <Image source={require('../../assets/logout.png')} style={{
            width:21, height:21,
          }}
          />
        </View>

      </TouchableNativeFeedback>
    </View>

    </View>

    <ScrollView>
{/* MAIN CONTRNT */}
<View style={{padding:10,}}>

<MyCarouser/>

{/* MENU 1 */}
<View style={{flexDirection:"row", padding:10, justifyContent:"space-around"}}>

{/* 1 */}
<TouchableNativeFeedback onPress={() => navigation.navigate('PaketUmroh')}>
  <View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
  width:100, height:97.4, borderWidth:1, borderColor:"white",
  justifyContent:"center", alignItems:"center", }}>
    <Image source={require('../../assets/pakethajiumroh.png')} style={{
      height:50,
      width:50,
      top:21
    
    }}/>
    <Text style={{
      color:"white",
      textAlign:"center",
      fontSize: MyDimensi / 5.1,
      fontFamily:fonts.primary[400],
      top: 50
      
     
     
    }}>
    Paket Haji & Umroh
    </Text>
  </View>

</TouchableNativeFeedback>

 {/* 2 */}
 <TouchableNativeFeedback onPress={() => navigation.navigate('Pendaftaran')}>
  <View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
  width:100, height:97.4, borderWidth:1, borderColor:"white",
  justifyContent:"center", alignItems:"center", }}>
    <Image source={require('../../assets/pendaftaran.png')} style={{
      height:50,
      width:50,
      top:21,
    
    }}/>
    <Text style={{
      color:"white",
      textAlign:"center",
      fontSize: MyDimensi / 5.1,
      fontFamily:fonts.primary[400],
      top:40
      
     
    }}>
    Pendaftaran
    </Text>
  </View>

</TouchableNativeFeedback>

 {/* 3 */}
 <TouchableNativeFeedback onPress={() => navigation.navigate('UpdateSeat')}>
  <View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
  width:100, height:97.4, borderWidth:1, borderColor:"white",
  justifyContent:"center", alignItems:"center", }}>
    <Image source={require('../../assets/updateseat.png')} style={{
      height:50,
      width:50,
      top:15,

    
    }}/>
    <Text style={{
      color:"white",
      textAlign:"center",
      fontSize: MyDimensi / 5.1,
      fontFamily:fonts.primary[400],
      top:40
      
     
    }}>
    Update Seat
    </Text>
  </View>

</TouchableNativeFeedback>


</View>

    <MyGap jarak={50}/>

  {/* MENU 2 */}
  <View style={{flexDirection:"row", padding:10, justifyContent:"space-around"}}>

{/* 1 */}
<TouchableNativeFeedback onPress={() => navigation.navigate('Saldoku')}>
<View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
width:100, height:97.4, borderWidth:1, borderColor:"white",
justifyContent:"center", alignItems:"center", }}>
<Image source={require('../../assets/saldoku.png')} style={{
height:50,
width:50,
top:10

}}/>
<Text style={{
color:"white",
textAlign:"center",
fontSize: MyDimensi / 5.1,
fontFamily:fonts.primary[400],
top: 40,



}}>
Saldoku
</Text>
</View>

</TouchableNativeFeedback>

{/* 2 */}
<TouchableNativeFeedback onPress={() => navigation.navigate('Datajamaah')}>
<View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
width:100, height:97.4, borderWidth:1, borderColor:"white",
justifyContent:"center", alignItems:"center", }}>
<Image source={require('../../assets/datajamaah.png')} style={{
height:50,
width:50,
top:21

}}/>
<Text style={{
color:"white",
textAlign:"center",
fontSize: MyDimensi / 5.1,
fontFamily:fonts.primary[400],
top: 50


}}>
Data Jamaah
</Text>
</View>

</TouchableNativeFeedback>

{/* 1 */}
<TouchableNativeFeedback onPress={() => navigation.navigate('Pembayaran')}>
<View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
width:100, height:97.4, borderWidth:1, borderColor:"white",
justifyContent:"center", alignItems:"center", }}>
<Image source={require('../../assets/payment.png')} style={{
height:50,
width:50,
top:10

}}/>
<Text style={{
color:"white",
textAlign:"center",
fontSize: MyDimensi / 5.1,
fontFamily:fonts.primary[400],
top:41



}}>
Payment
</Text>
</View>

</TouchableNativeFeedback>


</View>

<MyGap jarak={50}/>


  {/* MENU 3 */}
  <View style={{flexDirection:"row", padding:10, justifyContent:"flex-start"}}>

{/* 1 */}
<TouchableNativeFeedback onPress={() => navigation.navigate('Royalti')}>
<View style={{padding:10, backgroundColor:colors.primary, borderRadius:20,
width:100, height:97.4, borderWidth:1, borderColor:"white",
justifyContent:"center", alignItems:"center", }}>
<Image source={require('../../assets/royalti.png')} style={{
height:50,
width:50,
top:10

}}/>
<Text style={{
color:"white",
textAlign:"center",
fontSize: MyDimensi / 5.1,
fontFamily:fonts.primary[400],
top: 40,



}}>
Royalti
</Text>
</View>

</TouchableNativeFeedback>


</View>



</View>

<MyGap jarak={50}/>
    </ScrollView>



    </ImageBackground>
  
  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})