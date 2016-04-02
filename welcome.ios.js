import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';

let WelcomeScreen = React.createClass({
  render: function () {
  return (
    <View style={styles.windowContainer}>
      <View style={styles.mainContainer}>
        <WelcomeImage/>
        <WelcomeMessage/>
      </View>
    <FooterButton/>
  </View>
  )
  }
});

let WelcomeMessage = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={[styles.baseText, styles.welcomeText]}>
          Welcome!
        </Text>
        <Text>We're here to help. But you need to promise us something:
        </Text>
      </View>
    )
  }
})

let WelcomeImage = React.createClass({
  render: function() {
    return (
    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={require('./assets/img/smiley.png')}
      />
      <Image/>
    </View>
    )
  }
})

let FooterButton = React.createClass({
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
          onPress={() => {
            console.log('hi, raised button!');
          }}
          >
          <Text pointerEvents="none"
                style={styles.baseText}>
            I promise that I'll save money!
          </Text>
        </MKButton>
      </View>
    )
  }
})


export {WelcomeScreen};