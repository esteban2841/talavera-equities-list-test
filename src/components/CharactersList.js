import { StyleSheet ,View, Text, FlatList } from 'react-native'
import React from 'react'
import CharactersCard from '../components/CharactersCard'

export default function CharactersList(props) {
  const { characters } = props
  
  return (
    <FlatList
      data={characters}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(characters)=>String(characters.id)}
      renderItem={({item})=> <CharactersCard character={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer:{
    paddingHorizontal:5,

  }
})