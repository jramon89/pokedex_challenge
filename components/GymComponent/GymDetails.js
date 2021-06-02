import * as React from 'react';
import { View, Text } from "react-native";

const GymDetails = (props) => (
    <View>
        <Text>
            Details { props.route.params.id }
        </Text>
    </View>
)
export default GymDetails;