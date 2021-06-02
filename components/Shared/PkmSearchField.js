import * as React from 'react';
import {View, Text, Image, StyleSheet, TextInput, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



const PkmSearchField = ({ onChange, onFocus, withFullwidth, autoFocus, value, }) => {

    const width = withFullwidth ? Dimensions.get('window').width - 60 : 200;

    return (
        <View>
            <View style={{
                margin: 10,
                flexDirection: 'row',
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 15,
                width
            }}>
                <View style={ styles.iconBox}>
                    <Text>
                        <Ionicons name="ios-search" size={22} color={'#dcdcdc'}></Ionicons>
                    </Text>
                </View>
                <TextInput
                    value={ value }
                    autoFocus={ autoFocus }
                    placeholder="Search..."
                    onFocus={ onFocus ? onFocus : () => false }
                    onChangeText={ onChange ? onChange : () => false}
                    style={ styles.input }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        borderColor: '#6d6d6d', //dcdcdc
        borderWidth: 1,
        borderRadius: 15,
    },
    container: {
        margin: 10,
        flexDirection: 'row',
        borderColor: '#c4c4c4',
        borderWidth: 1,
        borderRadius: 15,
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    input: {
        //width: ,
        padding: 4,
        flex: 1,
        alignSelf: 'center',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default PkmSearchField;
