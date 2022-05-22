import { StyleSheet ,View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function CharactersCard(props) {
    const {character}=props
    console.log(character)
    const goToCharacter = ()=>{
        console.log(`Vamos a Character${character.name}`)
    }
  return (
    <TouchableWithoutFeedback onPress={goToCharacter}>
      <View style={styles.card} >
          <View style={styles.spacing} >
            <Text>
                {character.name}
            </Text>

          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height: 130,

    },
    spacing:{
        flex: 1,
        padding: 5,
    }
})