import React from "react"
import { FlatList, ScrollView, StyleSheet } from "react-native"
import { Equity } from "../../../types/equities"
import EquitiesCard from "./EquitiesCard"

interface EquitiesListProps {
  equities: Equity[];
}

const EquitiesList = ({equities}: EquitiesListProps) => {
  return (
    <ScrollView 
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollableContentContainer}
      >
        <FlatList
          data={equities}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=>String(index)}
          renderItem={({item, index})=> <EquitiesCard equity={item} ind={index} />}
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