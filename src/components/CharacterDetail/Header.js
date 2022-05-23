import { StyleSheet,View, Text, SafeAreaView, Image } from 'react-native'
import { capitalize } from "lodash"
import React from 'react'
import getColorBySpicies from "../../utils/getColorBySpicies.js"

export default function Header(props) {
    const { image } = props
  return (
    <View style={styles.container} >
        <Image source={{uri: image}} style={styles.image}  />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 500,
        width: "100%",
    },
    image:{
        width: "100%",
        height: "100%",
    }
})