/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import Button from 'apsl-react-native-button'

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
    console.log(styles.welcomeButtonContainer)
    return (
      <View style={styles.windowContainer}>
        <View style={styles.mainContainer}>
          <Image
             style={styles.icon}
             source={require('./assets/img/smiley.png')}
           />
           <Image/>
        </View>
        <View style={styles.footerContainer}>
          <Button style={styles.welcomeButtonContainer} textStyle={[styles.welcomeButtonText]}>
            I agree to start saving money!
          </Button>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  windowContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  icon: {
    height: 300,
    width: 300,
  },
  mainContainer: {
    flex: 0.8,
  },
  footerContainer: {
    flex: 0.2,
  },
  welcomeButtonText : {
    fontSize: 16,
  },
  welcomeButtonContainer: {
    backgroundColor: '#36FF74',
    margin: 25,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('saveGen', () => saveGen);
