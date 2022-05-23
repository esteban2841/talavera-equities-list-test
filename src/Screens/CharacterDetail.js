import { ScrollView , Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { characterDetailFound } from '../api/rmCharacters'
import Header from '../components/CharacterDetail/Header'
import Info from '../components/CharacterDetail/Info'

export default function CharacterDetail(props) {
  const {navigation, route:{params}} = props
  const [ characterDetailRender, setCharacterDetailRender ] = useState(null)
  
  
  useEffect(()=>{
    (async()=>{
      try{
        const response = await characterDetailFound(params.id)
        setCharacterDetailRender(response)
      }catch(error){
        navigation.goBack();
      }
    })()
  },[params])


  if(!characterDetailRender) return null

  return (
    <ScrollView>
      <Header 
      image={characterDetailRender.image}
      />
      <Info
        name={characterDetailRender.name} 
        id={characterDetailRender.id}
        species={characterDetailRender.species}
      />
    </ScrollView>
  )
}