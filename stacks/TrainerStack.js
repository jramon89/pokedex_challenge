import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Views from "../views";

const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Home" component={ Views.Trainers } options={{
                headerStyle: {
                    backgroundColor: '#fdfdfd', //'#ee0202'
                }
            }}/>

            <Stack.Screen name="Details" component={ Views.TrainerDetails } initialParams={{id: 89}}/>
        </Stack.Navigator>
    );
}

export default HomeStack;
