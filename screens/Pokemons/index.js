import * as React from 'react';
import {View, Animated, Button} from "react-native";
import PokemonComponent from '../../components/PkmComponents'
import PkmLogoTitle from "../../components/Shared/PkmLogoTitle";
import PkmSearchField from "../../components/Shared/PkmSearchField";

import apiConfig from "../../api";

const Pokemon = (props) => {
    const [data, setData] = React.useState([]);
    const [value, setValue] = React.useState('');
    const [items, setItems] = React.useState([]);

    const [page, setPage] = React.useState(1);
    const [shouldFetch, setShouldFetch] = React.useState(true);
    const [isFetching, setIsFetching] = React.useState(false);



    props.navigation.setOptions({
        headerTitle: props => (<PkmLogoTitle { ...props } title="Pokedex" />),
        headerRight: () => (<PkmSearchField onFocus={ onFocus } value={ value }/>),
    })


    const fetchMore = React.useCallback(() => setShouldFetch(true), []);


    React.useEffect(() => {

        if (!shouldFetch) {
            return;
        }
        setIsFetching(true);
        apiConfig(`pokemon/?offset=${page}&limit=5`, '', 'GET', '')
            .then(data => {
                setShouldFetch(false);
                setIsFetching(false);
                setData([...data.results]);
                setPage(page + 19);
            }).catch(e => {
                setShouldFetch(false);
                setIsFetching(false);
            })

        return function cleanup() {
            setShouldFetch(false);
            setData([]);
        }

    }, [page, shouldFetch]);

    React.useEffect(() => {
        for (const file of data) {
            const url = file.url.split('v2/');
            apiConfig(url[1])
                .then(data => {
                    setIsFetching(false);
                    setItems(prevState => [
                        ...prevState, { name: data.name, images: data.sprites, data }
                    ]);
                }).catch(e => {
                    setIsFetching(false);
                }) ;
        }
        return function cleanup() {
            setShouldFetch(false);

        }
    },[data]);


    const retrieveInfo = async (path) => {
        return await apiConfig(path);
    }

    const retrieveSearchInfo = async (path) => {
        return await apiConfig(`pokemon/${ path }`);
    }

    const onFocus = () => {
        props.navigation.navigate('PokemonSearchResults');
    }

    return (
        <View>
            <PokemonComponent
                { ...props }
                data={ data }
                items={ items }
                isFetching={ isFetching }
                onGetItems={ fetchMore }
                retrieveSearchInfo={ retrieveSearchInfo }
                retrieveInfo={ retrieveInfo }/>
        </View>
    );
}
export default Pokemon;
