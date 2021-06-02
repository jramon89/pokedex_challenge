import * as React from 'react';
import {View, Text, Image, StyleSheet, FlatList,  ActivityIndicator } from "react-native";
import Slider from '@react-native-community/slider';


const Item = ({ title, stat }) => (
    <View style={ styles.statsInfo }>
        <View>
            <View style={ styles.rangeValues }>
                <Text style={ styles.statTitle }>{title}</Text>
                <Text>{stat}</Text>
            </View>
            <Slider
                style={{ width: 300, height: 30 }}
                minimumValue={0}
                maximumValue={200}
                value={stat}
                minimumTrackTintColor="#218de0"
                thumbTintColor="#218de0"
                maximumTrackTintColor="grey"/>
        </View>
    </View>
)
const PkmDetails = (props) => {
    const [details, setDetails] = React.useState({
        images: {
            front_default: ''
        },
        name: '',
        data: {
            types: [],
            height: '',
            weight: ''
        }
    });

    React.useEffect(() => {
        const params = props.route.params;
        setDetails({
            ...details,
            ...params.data,
        })
    },[props.route.params])

    const image = (details.images && details.images.front_default) ? details.images.front_default : null

    const renderItem = ({ item }) => (
        <Item stat={ item.base_stat } title={ item.stat.name } />
    )
    return (
            <FlatList
                ListHeaderComponent={
                    <>

                        <View style={ styles.container }>
                            <View style={ styles.subContainer }>
                                <View style={ styles.imageBox }>
                                    {
                                        image ?
                                            <Image source={{ uri: image }} style={{width: 150, height: 150}}/> :
                                            <View>
                                                <ActivityIndicator size="large"/>
                                            </View>
                                    }
                                </View>
                                <View style={ styles.info }>
                                    <Text style={ styles.name }>
                                        { details.name }
                                    </Text>
                                    <Text>
                                        <Text style={ styles.statTitle }>Heigth: <Text>{ details.data.height } m, </Text> </Text>
                                        <Text style={ styles.statTitle }>Weight: <Text>{ details.data.weight } kg</Text></Text>
                                    </Text>
                                    <View style={ styles.types }>
                                        <Text style={ styles.statTitle }>Types: </Text>
                                        {

                                            details.data.types.map((items, index) => (
                                                <Text key={ index } style={ styles.statTitle } >
                                                    {items.type.name}{(index !== details.data.types.length -1) && ', ' }
                                                </Text>
                                            ))
                                        }
                                    </View>
                                </View>
                                <View style={ styles.statistics }>
                                    <Text style={ styles.statTitle }>Statistics</Text>
                                </View>
                            </View>
                        </View>

                    </>
                }
                data={ details.data.stats }
                renderItem={ renderItem }
                keyExtractor={ (item, index) => item.key }/>

    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'column'
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    imageBox: {
        padding: 8,
        borderStyle: 'solid',
        alignItems: 'center',
    },
    statistics: {
        marginTop: 30
    },
    statsInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#9e9c9c',
    },
    rangeValues: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    statTitle: {
        color: 'grey',
        textAlign: 'center'
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})


export default PkmDetails;