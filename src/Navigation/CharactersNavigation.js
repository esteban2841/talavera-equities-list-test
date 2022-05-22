import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Characters from '../Screens/Characters';
import CharacterDetail from '../Screens/CharacterDetail';

const Stack = createStackNavigator();

export default function CharactersNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Characters' component={Characters} options={ {title: "", headerTransparent: true} } />
      <Stack.Screen name='CharactersDetail' component={CharacterDetail} />
    </Stack.Navigator>
  )
}