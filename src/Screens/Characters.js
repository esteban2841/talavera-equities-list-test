import { View, Text, StyleSheet, YellowBox } from 'react-native'
import React, { useEffect, useState}  from 'react'
import CharactersList from "../components/CharactersList"
import  {SafeAreaView}  from 'react-native-safe-area-context'
import DATAJSON from '../../dummy_stock_data.json'

const {stocks} = DATAJSON

export default function Characters() {
  const [ equities, setEquities ] = useState([...stocks])

  return (
    <SafeAreaView style={styles.mainContainer} >
      <CharactersList characters={equities} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"none",
  }
})