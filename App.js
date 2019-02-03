import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import Logo from './components/Logo'
import ImageCard from './components/ImageCard';
import ImageGrid from './components/ImageGrid';
import {createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  };
};

const AppStackNavigator = createStackNavigator({
  Choice: {
    screen:  HomeScreen 
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
