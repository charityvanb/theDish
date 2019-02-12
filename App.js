import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageCard from './components/ImageCard';
import ImageGrid from './components/ImageGrid';
import HomeScreen from './screens/HomeScreen';
import ViewDishes from './screens/ViewDishes';
import EditDishes from './screens/EditDishes';
import CheckDish from './screens/CheckDish';
import CameraScreen from './screens/CameraScreen';
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
        <Scene
          key='View'
          component={ViewDishes}
          title='ViewDishes'
        />
        <Scene
          key='Edit'
          component={EditDishes}
          title='EditDishes'
        />
        <Scene
          key='CameraScreen'
          component={CameraScreen}
          title='CameraScreen'
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