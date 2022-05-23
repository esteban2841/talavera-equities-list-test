import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {map, capitalize} from "lodash"
import getCharacterColorBySpicie from '../../utils/getColorBySpicies'

export default function Info(props) {
    
    const {name,id,species}=props

    

  return (
    <View style={{...styles.content, backgroundColor: getCharacterColorBySpicie(species)}} >
        <Text style={styles.name} >
            {name}
        </Text>
        <Text style={styles.name}>
            {id}
        </Text>
        <Text style={styles.name}>
            {species}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        padding: 20,
        marginTop:0,
        height: 310,
        justifyContent:'center',
        alignItems:"center",
    },
    name:{
        marginBottom:10,
        width: "50%",
        alignContent:'center',
        borderRadius: 5,
        color: "black",
        fontSize:24,
        backgroundColor: "grey",
        padding: 10,
    },
})