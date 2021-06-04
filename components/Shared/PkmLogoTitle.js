import * as React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from "react-native";


const PkmLogoTitle = (props) => {

    return (
        <View style={ styles.container } >
            <View style={ styles.iconBox}>
                <Image style={ styles.image }source={ require('../../assets/pokeball.png') }/>
            </View>
            <Text style={ styles.logoTitle }>{ props.title }</Text>
        </View>
    );
}


const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
    },
    iconBox: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      width: 40,
      height: 40,
    },
    icon: {
      resizeMode: 'cover'
    },
    logoTitle: {
        fontSize: 16,
        color: '#555'
    },
    image: {
        margin: 2,
        height: 40,
        width: 40
    }
})


export default PkmLogoTitle;
