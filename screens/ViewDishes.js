import React from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';

// fetch('https://limitless-woodland-39577.herokuapp.com/')
//     .then((response) => response.text())
//     .then((responseText) => {
//         console.log(responseText)
//     });

export default class ViewDishes extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {
        return fetch('https://limitless-woodland-39577.herokuapp.com/')
            .then( (response) => response.json() )
            .then( (reponseJson) =>{
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.dishes
                })
            } )
            .catch((error) => {
                console.log(error)
            })
    }

render() {
    if (this.state.isLoading) {

        return (
        <View style={styles.containerStyle}>
        <ActivityIndicator />
        </View>
        )

        } else {

        return (
            <View style={styles.containerStyle}>
            <Text>Stuff Goes Here</Text>
            </View>
        )
        }
    }
}
    // return (
    //     <View style={styles.containerStyle}>
    //     <Image
    //     style={{width: 300, height: 300}}
    //     source={require('../assets/Verseuse_porcelaine_de_Limoges.jpg')}
    //     />
    //     <Text>
    //         Limoges
    //     </Text>
    //     <Text>
    //         CVB
    //     </Text>
    //     </View>
    // );
// };

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#4C4C4D',
        shadowColor: '#4C4C4D',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
};
