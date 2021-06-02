import * as React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity
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
    const [values, setValues] = React.useState([]);

    const [filterValues, setFilterValues] = React.useState([]);

    const [isFetching, setIsFetching] = React.useState(false);

    React.useEffect(() => {
        for (const file of props.data) {
            const url = file.url.split('v2/');
            props.retrieveInfo(url[1])
                .then(data => {
                    setValues(prevState => [
                        ...prevState, { name: data.name, images: data.sprites, data }
                    ]);
                })
        }
    }, [props.data])

    React.useEffect(() => {
        if (props.searchParam) {
            const str = new RegExp(props.searchParam.trim(), 'i');
            const filter = [];
            const source = props.data.filter(item => {
                if (item.name.match(str)) {
                    return item;
                }
            })

            setIsFetching(!!source.length)
            console.log('PARAMS', props.searchParam)
            if (!source.length || !props.searchParam) {
                // setValues([]);
                setFilterValues([])
            }


            for (const item of source) {
                props.retrieveSearchInfo(item.name)
                    .then(data => {
                        filter.push({
                            name: data.name,
                            images: data.sprites,
                            data
                        })
                        setIsFetching(false)
                        setFilterValues([...filter])
                        // setValues([...filter])
                    })
            }
        }
    }, [props.searchParam])


    const renderItem = ({ item, index }) => (
        <Item
            {...props}
            data={ values }
            index={ index }
            name={ item.name }
            image={ item.images && item.images.front_default }
        /> );
    return(
        <SafeAreaView>
            {
                filterValues.length ? null :
                    <FlatList
                        data={values}
                        renderItem={renderItem}
                        numColumns={3}/>
            }
            {/*
                isFetching ? <View style={styles.notFound}>
                    <Text>Loading...</Text>
                </View> : !values.length ? <View style={styles.notFound}><Text>No items found</Text></View> :
                <FlatList
                    data={values}
                    onEndReached={props.onGetItems}
                    onEndReachedThreshold={0.5}
                    renderItem={renderItem}
                    ListFooterComponent={() => (
                        <View style={styles.notFound}>
                            <Text style={{textAlign: 'center'}}>Loading...</Text>
                        </View>)}
                    numColumns={3}/>
            */}


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
    notFound: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})

export default PokemonComponent;