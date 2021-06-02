import * as React from 'react';
import {View, Text, Button, StyleSheet} from "react-native";

const GymComponent = (props) => (
    <View style={styles.message}>
        <Text style={styles.font}>
            No service provided
        </Text>
    </View>
)
export default GymComponent;

const styles = StyleSheet.create({
    message: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    font: {

        fontSize: 20
    }
})

