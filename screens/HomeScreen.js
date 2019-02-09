import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './../components/Button';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text
            onPress={() => Actions.Check()}
            >HomeScreen
            </Text>
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