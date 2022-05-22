import { View, Text } from 'react-native'
import React, { useEffect, useState}  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getRickMortyApi } from '../api/rmCharacters'
import CharactersList from "../components/CharactersList"


export default function Charactes() {
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
    <SafeAreaView>
      <CharactersList characters={characters} />
    </SafeAreaView>
  )
}