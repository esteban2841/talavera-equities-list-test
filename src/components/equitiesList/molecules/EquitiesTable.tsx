import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import React from 'react'
import FilterTagsList from './FilterTagsList'
import EquitiesList from '../atoms/EquitiesList'
import { FilterList } from '../../../types/equities'

const filters : FilterList = [
  {
    type: 'primary',
    content: 'Sort',
  },
  // {
  //   type: 'primary',
  //   content: 'Filter by',
  // },7

  // still to implement the filter by that would search equity based on name or symbol
]

export default function EquitiesTable() {
  return (
    <View style={styles.mainContainer}>
      <FilterTagsList filterList={filters} />
      <EquitiesList/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 3,
    backgroundColor: 'rgb(47, 47, 47)',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

})