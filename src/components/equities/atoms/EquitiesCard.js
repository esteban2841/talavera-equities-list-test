import { StyleSheet ,View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {capitalize} from "lodash"
import { useNavigation } from "@react-navigation/native"

export default function EquitiesCard(props) {
  const navigation = useNavigation()

    const {equity, ind}=props
    const goToCharacter = ()=>{
      navigation.navigate("CharactersDetail", { id : ind })
    }

    const bgStyles = { ...styles.bgStyles} 

  return (
    <TouchableWithoutFeedback onPress={goToCharacter}>
      <View style={styles.card} >
          <View style={styles.spacing} >
            <View style={bgStyles} >
              <Text style={styles.name} >{capitalize(equity.name)}</Text>
              <Text style={styles.number} >#{`${ind}`.padStart(3, 0)}</Text>
            </View>

          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card:{
    flex: 1,
    height: 150,
    
  },
  spacing:{
    flex: 1,
    padding: 5,
    
  },
  bgStyles:{
    flex: 1,
    borderRadius:15,
    padding: 10,
  },
  number:{
    color: "rgb(255, 255, 255)",
    fontSize: 11
  },
  name:{
    color: "rgb(255, 255, 255)",
    fontWeight:"bold",
    fontSize: 15,
    paddingTop:10,
  },

})