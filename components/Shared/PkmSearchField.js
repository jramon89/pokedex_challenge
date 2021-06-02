import * as React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const PkmSearchField = ({ onChange }) => {

    return (
        <View style={ styles.container } >
            <View style={ styles.iconBox}>
                <Text>
                    <Ionicons name="ios-search" size={22} color={'#dcdcdc'}></Ionicons>
                </Text>
            </View>
            <TextInput placeholder="Search..." onChangeText={onChange('search')} style={ styles.input } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 15,
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    input: {
        // borderColor: '#333333',
        // borderWidth: 1,
        outlineStyle:'none',
        outline: 'none',
        padding: 4,
        flex: 1
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default PkmSearchField;
