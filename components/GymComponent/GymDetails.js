import * as React from 'react';
import { View, Text } from "react-native";

const ProductDetails = (props) => {
    return (
        <View>
            <Text>
                Product details { props.route.params.id }
            </Text>
        </View>
    );
}
export default ProductDetails;