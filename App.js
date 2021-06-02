import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

//import TrainerStack from './stacks/Stacks';

import Tabs from "./components/Tabs";

//const Stack = createStackNavigator();

 function App() {
    return (
        <NavigationContainer>
           <Tabs/>
        </NavigationContainer>
    );
}

export default App;