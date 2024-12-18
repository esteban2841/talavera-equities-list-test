import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EquitiesNavigation from './EquitiesNavigation';
import {Image} from "react-native"

const Stack = createStackNavigator();

export default function Navigation() {
	console.log("TCL: Navigation -> Navigation")
  return (
    <Stack.Navigator>
      <Stack.Screen name='Equities List' component={EquitiesNavigation}/>
    </Stack.Navigator>
  )
}

function renderLogo (){
  return <Image  
    source={require("../assets/rickLogo.png")}
    style={{width : 120, height:70, top:-15}}
  />

}