import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [bg,setbg] =useState("#FFFFFF")

  const generatecolor =()=>{
    const hexrange ='0123456789ABCDEF'
    let color ="#"
    for (let i = 0; i < 6; i++) {
      color+=hexrange[Math.floor(Math.random() * 16)];
      
    }
    setbg(color)
  }
  return (
    <>
    <StatusBar backgroundColor={bg}/>
    <View style={[styles.container,{backgroundColor:bg}]}>
      <TouchableOpacity onPress={generatecolor}>
        <View style={styles.actionbtn}>
          <Text style={styles.actionbtntxt}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionbtn:{
 borderRadius:12,
 backgroundColor:'#6A1B4D',
 paddingVertical:10,
 paddingHorizontal:40
  },
  actionbtntxt:{
    fontSize:24,
    color:'#FFFFFF',
    
  }
})