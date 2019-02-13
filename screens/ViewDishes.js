import React from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator, FlatList } from 'react-native';

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
            .then( dishes => dishes.json() )
            .then( dishes => {
                console.log(dishes.dishes)
                this.setState({
                    isLoading: false,
                    dataSource: dishes.dishes
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

        let dishes = this.state.dataSource.map((val, key) => {
            return ( <View key={key} style={styles.containerStyle}>
            <Image
            style={styles.imageStyle}
            source={{uri: val.url}}
            />
                    <Text style={styles.textStyle}>uploaded by: {val.uploader}</Text>
            </View>
                )
                }
            )
{/* <FlatList
          data={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View> */}

        return (
            <View style={styles.containerStyle}>
            {dishes}
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
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        textAlign: 'center'
    },
    imageStyle: {
        width: 300,
        height: 300,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
