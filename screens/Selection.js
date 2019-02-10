import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

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

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = () => {
    const { buttonStyle } =styles;
    const { textStyle } =styles;

return (
    <View style={[{height: 44, margin: 12}]}>
    <TouchableOpacity style={buttonStyle}>
        <Text style={textStyle}>Check a Dish</Text>
    </TouchableOpacity>
    </View>
);
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#4C4C4D',
        fontSize: 24
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor:'#FDE9ED',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#FDE9ED',
        marginLeft: 5,
        marginRight: 14,
    }
};

export default Selection;