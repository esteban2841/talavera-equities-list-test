import { StyleSheet ,View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getCharacterColorBySpicie from '../utils/getColorBySpicies'
import {capitalize} from "lodash"
import { useNavigation } from "@react-navigation/native"

export default function CharactersCard(props) {
  const navigation = useNavigation()

    const {character}=props
    const goToCharacter = ()=>{
      navigation.navigate("CharactersDetail", { id : character.id })
    }

    const characterColor= getCharacterColorBySpicie(character.species)
    const bgStyles = { backgroundColor: characterColor, ...styles.bgStyles} 

  return (
    <TouchableWithoutFeedback onPress={goToCharacter}>
      <View style={styles.card} >
          <View style={styles.spacing} >
            <View style={bgStyles} >
              <Text style={styles.name} >{capitalize(character.name)}</Text>
              <Text style={styles.number} >#{`${character.id}`.padStart(3, 0)}</Text>
              <Image 
              source={{ uri : character.image }}
              style={styles.image}
              />
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
     
      color: "#fff",
      fontSize: 11
    },
    name:{
      color: "#fff",
      fontWeight:"bold",
      fontSize: 15,
      paddingTop:10,
    },
    image:{
      position: 'absolute',
      bottom: 2,
      right: 2,
      width: 90,
      height: 90,
    },
})