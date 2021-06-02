import * as React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";



const Item = ({ name, index, image, navigation, data }) => (
    <View style={ styles.container } >
        <TouchableOpacity onPress={ () => navigation.navigate('PokemonDetails', {
            data: data[index],
            index
        })}>
            <View style={ styles.itemContainer }>
                <View style={ styles.image }>
                    <Image source={{ uri: image }}  style={{width: 100, height: 80}}/>
                </View>
                <View>
                    <Text style={{
                        width: 'auto',
                        marginBottom: 5,
                        textAlign: 'center'
                    }}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);

const PkmSearchResults = (props) => {

    const renderItem = ({ data,  item, index }) => (
        <Item
            {...props}
            data={ props.items }
            index={ index }
            name={ item.name }
            image={ item.images && item.images.front_default }
        /> );
    return(
        <SafeAreaView>

            {
                props.isFetching ?
                    <View style={ styles.notFound }>
                        <ActivityIndicator size="large"/>
                    </View>:
                props.items.length ?
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={ props.items }
                        renderItem={renderItem}
                        numColumns={3}/> :
                    <View style={ styles.notFound }>
                        <Text>No items found </Text>
                    </View>
           }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        flex: 1,
    },
    itemContainer: {
        margin: 10,
    },
    sectionTitle: {
        fontSize: 20,
        margin: 10
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFound: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})

export default PkmSearchResults;