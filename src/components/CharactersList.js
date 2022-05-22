import { StyleSheet ,View, ActivityIndicator, FlatList, Platform } from 'react-native'
import React from 'react'
import CharactersCard from '../components/CharactersCard'

export default function CharactersList(props) {
  const { characters, loadCharacters } = props

  const loadMore = ()=>{
    loadCharacters()
  }

  return (
    <FlatList
      data={characters}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(characters)=>String(characters.id)}
      renderItem={({item})=> <CharactersCard character={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
        size="large"
        style={styles.spinner}
        color="#AEAEAE"
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer:{
    paddingHorizontal:5,
  },
  spinner:{
    marginTop:20,
    margintBottom:60,

  }
})