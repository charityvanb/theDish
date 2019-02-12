import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import CameraButton from '../components/CameraButton';
import ViewButton from '../components/ViewButton'

class HomeScreen extends Component {
    render() {
        return (
            <View>
        <Image
        style={styles.LogoStyle}
        source={require('../assets/theDishGrey.png')}
        />
            < Button />
            {/* < ViewButton /> */}
            < CameraButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    LogoStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: 200,
        height: 200,
 }

})

export default HomeScreen;