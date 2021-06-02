import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                    iconName = focused ? 'ios-man' : 'ios-man';
                } else if (route.name === 'Pokemons') {
                    iconName = focused ? 'ios-bug' : 'ios-bug';
                } else if (route.name === 'Gym') {
                    iconName = focused ? 'ios-ribbon' : 'ios-ribbon';
                }

                return <Ionicons name={ iconName } size={ size } color={ color }/>
            }
       })}
       tabBarOptions={{
           activeTintColor: '#ff0000',
           inactiveTintColor: 'grey'
       }}>

           <Tab.Screen name="Pokemons" component={ PokemonStack }/>
           <Tab.Screen name="Trainers" component={ TrainerStack }/>
           <Tab.Screen name="Gym" component={ GymStack }/>
       </Tab.Navigator>
   );
}
export default Tabs;