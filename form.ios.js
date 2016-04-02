import React, {
  Component,
  Text,
  PixelRatio,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import {styles} from './styles.ios.js';
import {
  setTheme,
  MKColor,
  MKButton,
  MKTextField,
  mdl
  } from 'react-native-material-kit';

let FormScreen = React.createClass({
  render: function() {
    return (
      <View>
        <TextfieldWithFloatingLabel/>
        <SubmitButton/>
      </View>
    )
  }
});

let SubmitButton = React.createClass({
  _onPressButtonPOST: function() {
    fetch('https://savegen.eu-gb.mybluemix.net/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
    .done();
  },
  render: function() {
    return(
      <View style={styles.footerContainer}>
        <MKButton
          backgroundColor={MKColor.LightGreen}
          width={300}
          shadowRadius={2}
          shadowOffset={{width:0, height:2}}
          shadowOpacity={.7}
          padding={10}
          shadowColor="black"
          onPress={this._onPressButtonPOST}
          >
          <Text pointerEvents="none"
                style={[styles.baseText, styles.buttonText]}>
            Submit
          </Text>
        </MKButton>
      </View>
    )
  }
});

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Number...')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withFloatingLabelFont({
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '600',
  })
  .withKeyboardType('numeric')
  .build();

const Textfield = MKTextField.textfield()
  .withPlaceholder('What is your number ')
  .withStyle(styles.textfield)
  .build();

export {FormScreen};