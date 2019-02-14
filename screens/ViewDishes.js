import React from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';

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
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.containerStyle}>
        <ActivityIndicator />
        </View>
        </SafeAreaView>
        )

        } else {

            return (
                <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
                <View style={styles.containerStyle} >
                    <FlatList
                    data={this.state.dataSource}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                    <View style={styles.flatview}>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: item.url}}
                    />
                    <Text style={styles.textStyle}>uploaded by: {item.uploader}</Text>
                    </View>
                    }
                    keyExtractor={item => item.email}
                  />
                </View>
                </SafeAreaView>
              );
            }
          }
  }



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
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
      },
}
