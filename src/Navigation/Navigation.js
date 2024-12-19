import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EquitiesNavigation from './EquitiesNavigation';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Equities List' component={EquitiesNavigation}/>
    </Stack.Navigator>
  )
}
