import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FavoriteNavigation from './FavoriteNavigation';
import CharactersNavigation from './CharactersNavigation';
import AccountNavigation from './AccountNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from "react-native"

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Favorite' component={FavoriteNavigation}
      options={{
        tabBarLabel:"My favorites",
        tabBarIcon: ({color, size})=> <Icon name="heart" color={color} size={size}/>
        

      }}
      />
      <Tab.Screen name='Characters' component={CharactersNavigation} 
      options={{
        tabBarLabel:"",
        tabBarIcon: ()=> renderLogo(),
      }}
      />
      <Tab.Screen name='Account' component={AccountNavigation}
      options={{
        tabBarLabel:"My Account",
        tabBarIcon: ({color, size})=> <Icon name="user" color={color} size={size}/>
      }}
      />
    </Tab.Navigator>
  )
}

function renderLogo (){
  return <Image  
    source={require("../assets/rickLogo.png")}
    style={{width : 120, height:70, top:-15}}
  />

}