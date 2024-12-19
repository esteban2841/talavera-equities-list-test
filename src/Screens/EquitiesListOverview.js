import { Platform, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useState}  from 'react'
import EquitiesTable from "../components/equities/molecules/EquitiesTable"
import  {SafeAreaView}  from 'react-native-safe-area-context'
import StocksOverview from '../components/equities/atoms/StocksOverview'
import DATAJSON from '../../dummy_stock_data.json'

const {stocks} = DATAJSON

export default function EquitiesListOverview() {
  const [ equities, setEquities ] = useState([...stocks])

  return (
    <SafeAreaView class='equities-list' style={styles.mainContainer} >
      <StocksOverview equities={equities}/>
      <EquitiesTable equities={equities} stateModifierCb={setEquities} />
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