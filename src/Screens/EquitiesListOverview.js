import { Platform, StatusBar, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useRef, useState}  from 'react'
import EquitiesTable from "../components/equities/molecules/EquitiesTable"
import  {SafeAreaView}  from 'react-native-safe-area-context'
import StocksOverview from '../components/equities/atoms/StocksOverview'
import { EquitiesContext } from '../context'

export default function EquitiesListOverview() {
  const {equities, filteredEquities} = useContext(EquitiesContext)
  const equitiesRef = useRef(null)

  useEffect(() => {
    equitiesRef.current = filteredEquities.length ? filteredEquities : equities
  }, [equities, filteredEquities])

  return (
    <SafeAreaView class='equities-list' style={styles.mainContainer} >
      <StocksOverview equities={filteredEquities.length ? equitiesRef.current : equities}/>
      <EquitiesTable equities={filteredEquities.length ? equitiesRef.current : equities} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"rgb(22, 22, 22)",
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    flex: 1,
  }
})