import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View,TextInput } from 'react-native';

import user from '../assets/user.png'
import hamburger from '../assets/hamburger.png'
import takeoff from '../assets/Takeoff.png'
import landing from '../assets/Landing.png'
import date from '../assets/Date.png'

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <img src={hamburger} alt="hamburger" />
              <Text style={styles.header}>Hiling.id</Text>
              <img src={user} alt="user" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Lokasi keberangkatan</Text>
              <View style={styles.maininputan}>
                <img src={takeoff} alt="takeoff" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Lokasi Tujuan</Text>
              <View style={styles.maininputan}>
                <img src={landing} alt="landing" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                  <img src={date} alt="date" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <Button
                color= '#ED7D31'
                title="cari"
                onPress={() => navigation.navigate('Penerbangan')}
              />
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Rahmad Sidik - 119140096</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86B257',
    overflow : "hidden",
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  header2: {
    fontFamily: "Sans-Serif",
    fontWeight: "Bold",
  },
  card: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '80%',
    padding:20,
    borderRadius:10,
    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
  },
  input: {
    height: 40,
    width: '100%',
    border:'none',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    marginTop: '-100px',
    zIndex: -1,
    flex:1,
    borderRadius:10,
    backgroundColor: '#F1F1F1',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Home;