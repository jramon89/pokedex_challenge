import * as React from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    Image,
    ScrollView,
    ListView,
    TouchableHighlight,
    Touchable
} from "react-native";



const Item = ({ title, price, image, navigation }) => (
    <View style={ styles.container } >
        <TouchableHighlight onPress={ () => navigation.navigate('Details')}>
            <View style={ styles.itemContainer }>
                <View style={ styles.image }>
                    <Image source={{ uri: image }}  style={{width: 150, height: 80}}/>
                </View>
                <View>
                    <Text style={{
                        width: 'auto',
                        marginBottom: 5
                    }}>{title}</Text>
                    <Text>
                        ${price}.00 MXN
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    </View>
);

const Home = (props) => {

    const renderItem = ({ item }) => (
      <Item title={ item.title } price={ item.price } image={ item.image } {...props}/>
    );
    
    return(
        <ScrollView>
            <Text style={ styles.sectionTitle }>Estelares</Text>
            <View>
                <FlatList data={ props.dataStellar } renderItem={ renderItem }  numColumns={ 2 }/>
            </View>
            <Text style={ styles.sectionTitle }>Recomendados</Text>
            <View>
                <FlatList data={ props.dataPopular } renderItem={ renderItem } numColumns={ 2 }/>
            </View>
            <Text style={ styles.sectionTitle }>Otros</Text>
            <View>
                <FlatList data={ props.dataOther } renderItem={ renderItem } numColumns={ 2 }/>
            </View>
        </ScrollView>
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
    }
})

export default Home;