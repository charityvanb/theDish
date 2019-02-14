import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import CameraButton from '../components/CameraButton';
import ViewButton from '../components/ViewButton'

class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View>
        <Image
        style={styles.LogoStyle}
        source={require('../assets/theDishGrey.png')}
        />
            < ViewButton />
            < CameraButton />
            <Image
            style={styles.CupStyle}
            source={require('../assets/graycupsm.jpg')}
            />
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    basicStyle: {
        backgroundColor: "#FFFFFF"
    },
    LogoStyle: {
        backgroundColor: "#FFFFFF",
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: 200,
        height: 200,
 },
CupStyle: {
    backgroundColor: "#FFFFFF",
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 20,
}

})

export default HomeScreen;