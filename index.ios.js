/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import Button from 'apsl-react-native-button'
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class saveGen extends Component {
  render() {
    return (
      <View style={styles.windowContainer}>
        <View style={styles.mainContainer}>
          <WelcomeImage/>
          <WelcomeMessage/>
        </View>
        <FooterButton/>
      </View>
    );
  }
}

let WelcomeMessage = React.createClass({
  render: function() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.welcomeText}>
          Welcome!
        </Text>
        <Text>We're here to help. But you need to promise us something</Text>
      </Text>
    )
  }
})

let WelcomeImage = React.createClass({
  render: function() {
    return (
    <View style={styles.iconContainter}>
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

const styles = StyleSheet.create({
  windowContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  baseText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  welcomeText: {
    fontFamily: 'Avenir',
    fontSize: 25,
    color: 'black',
  },
  iconContainter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 70,
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
  mainContainer: {
    flex: 0.8,
  },
  footerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  welcomeButtonText : {
    fontSize: 16,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('saveGen', () => saveGen);
