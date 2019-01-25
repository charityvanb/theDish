import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import Logo from './components/Logo'
import ImageCard from './components/ImageCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Button />
        <ImageCard />
      </View>
    );
  };
};



const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40
  },
});
