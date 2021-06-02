import * as React from 'react';
import { View, Text, Button } from "react-native";

const Products = (props) => {

    console.log('Products', props);
    return (
        <View>
            <Text>
                Products
            </Text>
            <Button title={"Details"} onPress={ () => props.navigation.navigate('ProductDetailss', {
                id: 123456
            })}/>
        </View>
    );
}
export default Products;
