import * as React from 'react';
import { View, Text, Button } from "react-native";
import TrainerComponents from "../../components/TrainerComponents";

import PkmLogoTitle from "../../components/Shared/PkmLogoTitle";



const Index = (props) => {

    props.navigation.setOptions({
        headerTitle: props => (<PkmLogoTitle { ...props } title="Trainers" />)
    })
    return (
        <View>
            <TrainerComponents {...props} />
        </View>
    );
}
export default Index;