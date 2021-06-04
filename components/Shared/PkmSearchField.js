import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
    Platform
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';


const PkmSearchField = ({ onChange, onFocus, withFullwidth, autoFocus, value, navigation }) => {
    const size = Platform.OS === 'ios' ? 150 : 60
    const width = withFullwidth ? Dimensions.get('window').width - size : 200;
    const input = React.useRef();

    React.useEffect(() => {
        return navigation.addListener('focus', () => {
            input.current.blur();
        })
    })

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
                    ref={ input }
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
        marginTop: 4,
        marginLeft: 4
    },
    input: {
        height: 35,
        padding: 8,
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
