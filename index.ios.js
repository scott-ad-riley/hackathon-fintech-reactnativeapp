/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles} from './styles.ios.js';
import {WelcomeScreen} from './welcome.ios.js';

class Main extends Component {
  render() {
    return (
      <View style={styles.windowContainer}>
        <WelcomeScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('saveGen', () => Main);
