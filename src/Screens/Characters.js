import { View, Text, StyleSheet, YellowBox } from 'react-native'
import React, { useEffect, useState}  from 'react'
import { getRickMortyApi } from '../api/rmCharacters'
import CharactersList from "../components/CharactersList"
import  {SafeAreaView}  from 'react-native-safe-area-context'


export default function Characters() {
  const [ characters, setCharacters ] = useState([])

  useEffect(()=>{
    (async()=>{
      await loadCharacters()
    })()
  }, [])
  
  const loadCharacters = async ()=>{
    try{
      const response = await getRickMortyApi();
      setCharacters(response.results)
    } catch (error){
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={styles.mainContainer} >
      <CharactersList characters={characters} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"none",
    marginTop: 20
  }
})