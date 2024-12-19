import { StyleSheet ,View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {capitalize} from "lodash"
import { useNavigation } from "@react-navigation/native"
import { Equities, Equity } from "../../../types/equities"
import { CustomText } from './CustomText'

export interface EquityCardProps{
  equity: Equity
  ind: number
}

export default function EquitiesCard({equity, ind}: EquityCardProps) {
  const navigation = useNavigation()
    const goToCharacter = ()=>{
      navigation.navigate("CharactersDetail", { id : ind })
    }
    const bgStyles = { ...styles.bgStyles} 

  return (
    <TouchableWithoutFeedback style={styles.button} onPress={goToCharacter}>
      <View style={styles.card} >
          <View style={styles.spacing} >
            <View style={styles.bgStyles} >
              <CustomText type='default' >{capitalize(equity.name)}</CustomText>
              <CustomText type='subtitle' >#{`${ind}`.padStart(3, 0)}</CustomText>
            </View>

          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button:{
    flex: 1,
  },
  card:{
    flex: 1,
  },
  spacing:{
    flex: 1,
    padding: 5,
    
  },
  bgStyles:{
    flex: 1,
    backgroundColor: '#161616',
    borderRadius:15,
    padding: 10,
    gap: 0,
    zIndex: 2,
  },


})