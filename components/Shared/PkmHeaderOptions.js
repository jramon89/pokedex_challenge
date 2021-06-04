import * as React from 'react';
import {View, StyleSheet, TouchableOpacity } from "react-native";
import Micons from "react-native-vector-icons/MaterialIcons";


const PkmHeaderOptions = ({ onFocus }) => {

    return (
        <View style={ styles.container } >
            <View style={ styles.iconBox}>
                <TouchableOpacity onPress={ onFocus }>
                    <Micons name="search" size={35} color={'#555'}></Micons>
                </TouchableOpacity>
            </View>
            <View style={ styles.iconBox}>
                <TouchableOpacity>
                    <Micons name="translate" size={30} color={'#555'}></Micons>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        width: 40,
        height: 40,
    },
})


export default PkmHeaderOptions;
