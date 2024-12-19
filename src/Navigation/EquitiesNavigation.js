import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EquitiesListOverview from '../Screens/EquitiesListOverview';
import { EquitiesProvider } from '../context';
import EquityDetailOverview from '../components/equityDetail/molecules/EquityDetailOverview';

const Stack = createStackNavigator();

export default function EquitiesNavigation() {
  return (
    <EquitiesProvider>

      <Stack.Navigator>
        <Stack.Screen name='Equities List' component={EquitiesListOverview} options={ {title: "", headerTransparent: true} } style={{
          width : '100%',
          height : '100%',
        }} />
        <Stack.Screen name='Equity detail' component={EquityDetailOverview} options={ {title: "", headerTransparent: true} } style={{
          width : '100%',
          height : '100%',
          
        }} />
      </Stack.Navigator>
    </EquitiesProvider>
  )
}