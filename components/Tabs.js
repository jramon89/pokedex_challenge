import * as React from 'react';
import Micons from 'react-native-vector-icons/MaterialIcons';

import TrainerStack from "../stacks/TrainerStack";
import GymStack from "../stacks/GymStack";
import PokemonStack from "../stacks/PokemonStack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



const Tabs = () => {
   return (
       <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Trainers') {
                    iconName = focused ? 'face' : 'face';
                } else if (route.name === 'Pokemons') {
                    iconName = focused ? 'adjust' : 'adjust';
                } else if (route.name === 'Gym') {
                    iconName = focused ? 'home' : 'home';
                }

                return <Micons name={ iconName } size={ size } color={ color }/>
            }
       })}
       tabBarOptions={{
           activeTintColor: '#218de0',
           inactiveTintColor: 'grey'
       }}>

           <Tab.Screen name="Pokemons" component={ PokemonStack }/>
           <Tab.Screen name="Trainers" component={ TrainerStack }/>
           <Tab.Screen name="Gym" component={ GymStack }/>
       </Tab.Navigator>
   );
}
export default Tabs;