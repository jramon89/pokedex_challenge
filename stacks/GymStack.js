import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Views from "../screens";


const Stack = createStackNavigator();


const GymStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Gym" component={ Views.Gym } initialParams={{id: 89}}/>
            <Stack.Screen
                name="GymDetails"
                component={ Views.GymDetails }
                options={{ title: '' }}/>
        </Stack.Navigator>
    );
}

export default GymStack;