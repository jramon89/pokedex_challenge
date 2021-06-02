import * as React from 'react';
import { View, Text, Button } from "react-native";
import GymDetailsDetailsComponent from "../../components/GymComponent/GymDetails";

const ProductDetails = (props) => {
    return(
        <View>
            <GymDetailsDetailsComponent {...props} />
        </View>
    );
}
export default ProductDetails;
