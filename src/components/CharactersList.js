import { StyleSheet ,View, ActivityIndicator, FlatList, Platform } from 'react-native'
import React from 'react'
import CharactersCard from '../components/CharactersCard'

export default function CharactersList(props) {
  const { characters } = props
	console.log("TCL: CharactersList -> characters", characters)
  return (
    <FlatList
      data={characters}
      numColumns={1}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(characters)=>String(characters.name)}
      renderItem={({item, index})=> <CharactersCard character={item} ind={index} />}
      contentContainerStyle={styles.flatListContentContainer}
     
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer:{
    paddingHorizontal:5,
  },

})