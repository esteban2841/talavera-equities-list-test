import { StyleSheet ,View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useContext } from 'react'
import {capitalize} from "lodash"
import { useNavigation } from "@react-navigation/native"
import { Equity } from "../../../types/equities"
import { CustomText } from './CustomText'
import { EquitiesContext } from '../../../context'

export interface EquityCardProps{
  equity: Equity
}

export default function EquitiesCard({equity}: EquityCardProps) {
  const { setEquityChanges } = useContext(EquitiesContext)
  const navigation = useNavigation()
    const goToCharacter = (equitySelected: Equity)=>{
      setEquityChanges && setEquityChanges(equitySelected)
      navigation.navigate("Equity detail")
    }
    const bgStyles = { ...styles.bgStyles} 

  return (
    <TouchableWithoutFeedback style={styles.button} onPress={()=>goToCharacter(equity)}>
      <View style={styles.card} >
          <View style={styles.spacing} >
            <View style={styles.bgStyles} >
              <View style={styles.infoContainerL}>
                <CustomText type='default' >{capitalize(equity.symbol)}</CustomText>
                <CustomText type='default' >{capitalize(equity.name)}</CustomText>
              </View>
              <View style={styles.infoContainerR}>
                <CustomText type='subtitle' >{(equity.daily_change)} %</CustomText>
                <CustomText type='subtitle' >{(equity.price)} $</CustomText>
              </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius:15,
    padding: 12,
    gap: 0,
    zIndex: 2,
  },
  infoContainerL:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoContainerR:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },


})