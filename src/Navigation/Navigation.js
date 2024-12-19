import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EquitiesNavigation from './EquitiesNavigation';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={
        {
          tabBarStyle:{
            backgroundColor: 'rgb(47,47,47)',
          }
        }
      }
    >
      <Tab.Screen name='Equities List' component={EquitiesNavigation}
        options={{
          tabBarBadgeStyle: {backgroundColor: 'rgb(47,47,47)'},
          tabBarIcon: ()=> <Entypo name="home" size={24} color="'rgb(220,12,6)'" />
        }}
      />
    </Tab.Navigator>
  )
}


    // <Stack.Navigator>
    //   <Stack.Screen name='Equities List' component={EquitiesNavigation}/>
    // </Stack.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name='Favorite' component={FavoriteNavigation}
    //   options={{
    //     tabBarLabel:"My favorites",
    //     tabBarIcon: ({color, size})=> <Icon name="heart" color={color} size={size}/>
        