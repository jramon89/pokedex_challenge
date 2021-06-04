import * as React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const PkmHeaderOptions = (props) => {

    return (
        <View style={ styles.container } >
            <View style={ styles.iconBox}>
                <Ionicons name="ios-search" size={30} color={'#333'} onPress={ props.onFocus }></Ionicons>
            </View>
            <View style={ styles.iconBox}>
                <Ionicons name="ios-flag" size={30} color={'#333'}></Ionicons>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 40,
        height: 40,
    },
})


export default PkmHeaderOptions;
