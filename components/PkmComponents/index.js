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
            data,
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

const PokemonComponent = (props) => {
    const renderItem = ({ item, index }) => (
        <Item
            {...props}
            data={ item }
            index={ index }
            name={ item.name }
            image={ item.images && item.images.front_default }
           /> );
    return(
        <SafeAreaView>
            <FlatList
                data={props.items}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={props.onGetItems}
                onEndReachedThreshold={0.5}
                renderItem={renderItem}
                ListFooterComponent={() => (
                        <View>
                            <View style={[ styles.loading, styles.loadingCircle ]}>
                                <ActivityIndicator size="large"/>
                            </View>
                        </View>
                    )}
                numColumns={3}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        flex: 1,
        // boxShadow: '0px 0px 3px silver'
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
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    loadingCircle: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10


    },
    notFound: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})

export default PokemonComponent;