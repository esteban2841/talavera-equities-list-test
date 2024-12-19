import React, { useContext } from "react"
import { FlatList, ScrollView, StyleSheet } from "react-native"
import { Equity } from "../../../types/equities"
import EquitiesCard from "./EquitiesCard"
import { EquitiesContext } from '../../../context/equities/EquitiesContext'

const EquitiesList = () => {
  
  const {equities, filteredEquities} = useContext(EquitiesContext)
  
  return (
    <ScrollView 
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollableContentContainer}
      >
        <FlatList
          data={filteredEquities?.length?filteredEquities:equities}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=>String(index)}
          renderItem={({item})=> <EquitiesCard equity={item} />}
          contentContainerStyle={styles.flatListContentContainer}
        
        />
      </ScrollView>
  )
}

export default EquitiesList

const styles = StyleSheet.create({
  flatListContentContainer:{
    flex: 1,
  },
  scrollableContentContainer:{
    flex: 1,
  },

})