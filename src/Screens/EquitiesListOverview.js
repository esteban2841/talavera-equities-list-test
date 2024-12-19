import { Platform, StatusBar, StyleSheet } from 'react-native'
import React  from 'react'
import EquitiesTable from "../components/equities/molecules/EquitiesTable"
import  {SafeAreaView}  from 'react-native-safe-area-context'
import StocksOverview from '../components/equities/atoms/StocksOverview'
import { EquitiesContext } from '../context'

export default function EquitiesListOverview() {

  return (
    <SafeAreaView class='equities-list' style={styles.mainContainer} >
      <StocksOverview/>
      <EquitiesTable />
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