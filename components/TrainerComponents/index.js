import * as React from 'react';
import {
    View,
    Text,

    StyleSheet,
    Dimensions
} from "react-native";
const TrainerComponent = (props) => (
    <View style={styles.message}>
        <Text style={styles.font}>
            No service provided
        </Text>
    </View>
);

const styles = StyleSheet.create({
    message: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    font: {

        fontSize: 20
    }
})

export default TrainerComponent;