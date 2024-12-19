import { StyleSheet, FlatList} from "react-native"
import { FilterEquitiesButton } from "../atoms/FilterEquitiesButton"
import React from 'react';
import { FilterList, FilterTag } from "../../../types/equities";

export interface FilterTagListProps {
  filterList: FilterTag[];
  stateModifierCb: (state: any) => void;
}

const FilterTagsList = ({filterList, stateModifierCb}: FilterTagListProps) => {
  return (
   <FlatList
      data={filterList}
      numColumns={1}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(filter, index) => index.toString()}
      renderItem={({item})=> <FilterEquitiesButton stateModifierCb={stateModifierCb} type={item.type} content={item.content} />}
      contentContainerStyle={styles.container}
    
    />
  )
}

export default FilterTagsList


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  }
})
