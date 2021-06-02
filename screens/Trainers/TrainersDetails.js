import * as React from 'react';
import { View, Text, Button } from "react-native";
import TrainersDetailsComponent from "../../components/TrainerComponents/TrainerDetails";

const TrainerDetails = (props) => {
    return(
        <View>
            <TrainersDetailsComponent {...props} />
        </View>
    );
}
export default TrainerDetails;
