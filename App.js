import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{ width: 200, height: 200 }}
        source={require('./assets/theDishGrey.png')}
        />
        <Button />
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
