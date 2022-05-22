import { View, Text, StyleSheet, YellowBox } from 'react-native'
import React, { useEffect, useState}  from 'react'
import { getRickMortyApi } from '../api/rmCharacters'
import CharactersList from "../components/CharactersList"
import  {SafeAreaView}  from 'react-native-safe-area-context'


export default function Characters() {
  const [ characters, setCharacters ] = useState([])
  const [ nextUrl, setNextUrl ]= useState(null)

  useEffect(()=>{
    (async()=>{
      await loadCharacters()
    })()
  }, [])
  
  const loadCharacters = async ()=>{
    try{
      const response = await getRickMortyApi(nextUrl);
      setNextUrl(response.info.next)
      setCharacters([...characters, ...response.results])
    } catch (error){
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={styles.mainContainer} >
      <CharactersList characters={characters} loadCharacters={loadCharacters} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"none",
  }
})