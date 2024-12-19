import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EquitiesListOverview from '../Screens/EquitiesListOverview';

const Stack = createStackNavigator();

export default function EquitiesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Equities List' component={EquitiesListOverview} options={ {title: "", headerTransparent: true} } style={{
        width : '100%',
        height : '100%',
      }} />
    </Stack.Navigator>
  )
}