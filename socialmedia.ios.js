import React, {
  Component,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';
import {NextButton} from './buttons.ios.js';

let SocialMedia = React.createClass({
  // inside here, have a button that calles this.props.navigator.push({ id: 'welcome' })
  render: function () {
    return(
      <View style={styles.windowContainer}>
        some stuffs
      </View>
      )
  }
});

export {SocialMedia};