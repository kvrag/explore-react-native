import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.purpleTheme}>Hello, World!</Text>
        <Text style={styles.pinkTheme}>Here I am!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purpleTheme: {
    height: 150,
    width: 150,
    color: 'lavender', 
    backgroundColor: 'indigo',
    fontWeight: 'bold',
    fontSize: 24
  },
  pinkTheme: {
    height: 100,
    width: 100,
    backgroundColor: 'lightpink',
    color: 'magenta',
    fontSize: 20
  }
})
