import React from 'react'
import EquitiesNavigation from './EquitiesNavigation';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Entypo from '@expo/vector-icons/Entypo';
import Home from '../Screens/Home';
import { EquitiesProvider } from '../context';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <EquitiesProvider>

      <Tab.Navigator
        screenOptions={
          {
            tabBarStyle:{
              backgroundColor: 'rgb(47,47,47)',
            }
          }
        }
      >
        {/* <Tab.Screen name='Home' component={Home}
          options={{
            tabBarBadgeStyle: {backgroundColor: 'rgb(47,47,47)'},
            tabBarIcon: ()=> <Entypo name="home" size={24} color="'rgb(220,12,6)'" />
          }}
        /> */}
        <Tab.Screen name='Equities List' component={EquitiesNavigation}
          options={{
            tabBarBadgeStyle: {backgroundColor: 'rgb(47,47,47)'},
            tabBarIcon: ()=> <Entypo name="home" size={24} color="'rgb(220,12,6)'" />
          }}
        />
      </Tab.Navigator>
    </EquitiesProvider>
  )
}