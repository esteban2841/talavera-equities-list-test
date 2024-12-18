import { Platform, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useState}  from 'react'
import EquitiesList from "../components/equities/molecules/EquitiesList"
import  {SafeAreaView}  from 'react-native-safe-area-context'
import DATAJSON from '../../dummy_stock_data.json'
import StocksOverview from '../components/equities/atoms/StocksOverview'

const {stocks} = DATAJSON

export default function EquitiesListOverview() {
  const [ equities, setEquities ] = useState([...stocks])

  return (
    <SafeAreaView style={styles.mainContainer} >
      <StocksOverview equities={equities}/>
      <EquitiesList equities={equities} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"rgb(22, 22, 22)",
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})