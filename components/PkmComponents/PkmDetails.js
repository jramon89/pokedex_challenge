import * as React from 'react';
import { View, Text } from "react-native";

const PokemonDetails = (props) => {
    return (
        <View>
            <Text>
                Pokemon details { props.route.params.id }
            </Text>
        </View>
    );
}
export default PokemonDetails;