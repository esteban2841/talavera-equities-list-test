import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import EquitiesCard from '../atoms/EquitiesCard'

export default function EquitiesList(props) {
  const { equities } = props
	console.log("TCL: equitiesList -> equities", equities)
  return (
    <FlatList
      data={equities}
      numColumns={1}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(equities)=>String(equities.name)}
      renderItem={({item, index})=> <EquitiesCard equity={item} ind={index} />}
      contentContainerStyle={styles.flatListContentContainer}
     
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer:{
    flex : 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgb(47, 47, 47)',
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

})