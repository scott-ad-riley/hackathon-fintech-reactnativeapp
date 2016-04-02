import React, {
  StyleSheet,
} from 'react-native';

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

export {styles};