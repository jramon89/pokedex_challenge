import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Views from "../screens";


const Stack = createStackNavigator();

const PokemonStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pokemons"
                component={ Views.Pokemons }
                options={{
                    headerStyle: {
                        backgroundColor: '#fdfdfd', //'#ee0202'
                    }
                }}/>
            <Stack.Screen
                name="PokemonDetails"
                component={ Views.PokemonDetails }
                options={{ title: 'Pokemon details' }}/>
            <Stack.Screen
                name="PokemonSearchResults"
                component={ Views.PokemonSearch }
                options={{ title: '' }}/>
        </Stack.Navigator>
    );
}

export default PokemonStack;