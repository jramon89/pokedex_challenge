import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Views from "../views";
import {TextInput, View, Text} from "react-native";

const Stack = createStackNavigator();
{/*
const P = (props) => {
    const [value, setValue] = React.useState({ search: '' })


    const onChangeText = name => value => {
        setValue({...value, [name]: value})
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TextInput onChangeText={onChangeText('search')} style={{ border: 'solid red', outline: 'none'}}/>
            )
        })
    }, [props.navigation, setValue]);
    return <Text>{value.search}</Text>;
}

*/}

const PokemonStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pokemonsw"
                component={ Views.Pokemons }
                options={{
                    headerStyle: {
                        backgroundColor: '#fdfdfd', //'#ee0202'
                    }
                }}/>
            <Stack.Screen
                name="PokemonDetails"
                component={ Views.PokemonDetails }
                options={{ title: 'Product details' }}/>
        </Stack.Navigator>
    );
}

export default PokemonStack;