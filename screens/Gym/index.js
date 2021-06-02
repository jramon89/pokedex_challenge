import * as React from 'react';
import { View, Text, Button } from "react-native";
import PkmLogoTitle from "../../components/Shared/PkmLogoTitle";
import GymComponent from "../../components/GymComponent";

const Gym = (props) => {
    props.navigation.setOptions({
        headerTitle: props => (<PkmLogoTitle { ...props } title="Gym" />)
    })

    return (
        <View>
            <GymComponent {...props}/>
        </View>
    );
}
export default Gym;
