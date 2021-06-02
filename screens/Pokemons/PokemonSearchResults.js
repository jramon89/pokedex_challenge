import * as React from 'react';
import { View } from "react-native";
import PkmSearchResults from "../../components/PkmComponents/PkmSearchResults";
import PkmSearchField from "../../components/Shared/PkmSearchField";
import apiConfig from "../../api";
import PokemonComponent from "../../components/PkmComponents";
import PkmLogoTitle from "../../components/Shared/PkmLogoTitle";

const PokemonSearch = (props) => {
    const [value, setValue] = React.useState('');
    const [items, setItems] = React.useState([]);

    // this state was going to be used for filter by string
    const [filter, setFilter] = React.useState([
        'pikachu',
        'bulbasaur',
        'squirtle',
        'charmander'
    ]);

    const [isFetching, setIsFetching] = React.useState(false);

    props.navigation.setOptions({
        headerRight: () => (<PkmSearchField
            onChange={ onChange }
            withFullwidth={ true }
            autoFocus={true}
            value={ value }/>
        ),
    })

    React.useEffect(() => {
        if (value) {
            setIsFetching(true)
            apiConfig(`pokemon/${value.toLowerCase()}`)
                .then((data) => {
                    setItems([{ name: data.name, images: data.sprites, data }]);
                    setIsFetching(false);
                }).catch(e => {
                    setIsFetching(false);
                })
        }
        return function cleanup() {
            setItems([]);
        }
    },[value])

    const onChange = value => {
        setValue(value);
    }

    const retrieveInfo = async (path) => {
        return await apiConfig(path);
    }

    const retrieveSearchInfo = async (path) => {
        return await apiConfig(`pokemon/${ path }`);
    }

    return(
        <View>
            <PkmSearchResults
                { ...props }
                items={ items }
                isFetching={ isFetching }
                retrieveInfo={ retrieveInfo }
                retrieveSearchInfo={ retrieveSearchInfo }/>
        </View>
    );
}
export default PokemonSearch;
