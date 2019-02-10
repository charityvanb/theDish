import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './../components/Button';
import Logo from './../components/Logo';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            < Logo />
            <Text
            onPress={() => Actions.Check()}
            >HomeScreen
            </Text>
            < Button />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default HomeScreen;