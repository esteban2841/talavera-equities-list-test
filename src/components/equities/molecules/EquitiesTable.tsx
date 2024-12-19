import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import React from 'react'
import FilterTagsList from './FilterTagsList'
import EquitiesList from '../atoms/EquitiesList'
import { Equity, FilterList } from '../../../types/equities'

const filters : FilterList = [
  {
    type: 'primary',
    content: 'Sort',
  },
  {
    type: 'primary',
    content: 'Filter by',
  },
]

export interface EquitiesTableProps {
  equities: Equity[];
  stateModifierCb: (state: any) => void;
}

export default function EquitiesTable({equities, stateModifierCb}: EquitiesTableProps) {
  return (
    <View style={styles.mainContainer}>
      <FilterTagsList filterList={filters} stateModifierCb={stateModifierCb} />
      <EquitiesList equities={equities} />
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