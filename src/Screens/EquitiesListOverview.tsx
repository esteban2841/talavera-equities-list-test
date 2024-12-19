import { Platform, StatusBar, StyleSheet } from 'react-native'
import React  from 'react'
import EquitiesTable from "../components/equitiesList/molecules/EquitiesTable"
import  {SafeAreaView}  from 'react-native-safe-area-context'
import StocksOverview from '../components/equitiesList/atoms/StocksOverview'

export default function EquitiesListOverview() {

  return (
    <SafeAreaView style={styles.mainContainer} >
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