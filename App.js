import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import Logo from './components/Logo'
import ImageCard from './components/ImageCard';
import ImageGrid from './components/ImageGrid';
import {createStackNavigator } from 'react-navigation';
import ChoiceScreen from './screens/ChoiceScreen'

export default class ChoiceScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Button />
        <ImageCard />
        <ImageGrid />
      </View>
    );
  };
};

const AppStackNavigator = createStackNavigator({
  Choice: {
    screen:  ChoiceScreen 
  }
})

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40
  },
});
