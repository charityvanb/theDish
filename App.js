
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import Logo from './components/Logo'
import ImageCard from './components/ImageCard';
import ImageGrid from './components/ImageGrid';
import HomeScreen from './screens/HomeScreen';
import CheckDish from './screens/CheckDish'
import { Router, Scene } from 'react-native-router-flux';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='Home'
          component={HomeScreen}
          title='HomeScreen'
          initial
        />
      <Scene
          key='Check'
          component={CheckDish}
          title='CheckDish'
        />
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({

  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40
  },

});

export default App;