import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Views from "../views";


const Stack = createStackNavigator();


const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Productsxx" component={ Views.Gym } initialParams={{id: 89}}/>
            <Stack.Screen
                name="ProductDetailss"
                component={ Views.GymDetails }
                options={{ title: 'Product details' }}/>
        </Stack.Navigator>
    );
}

export default ProductStack;