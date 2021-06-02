import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Views from "../screens";

const Stack = createStackNavigator();


const TrainerStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Trainers" component={ Views.Trainers } options={{
                headerStyle: {
                    backgroundColor: '#fdfdfd', //'#ee0202'
                }
            }}/>
            <Stack.Screen name="Details" component={ Views.TrainerDetails } initialParams={{id: 89}}/>
        </Stack.Navigator>
    );
}

export default TrainerStack;
