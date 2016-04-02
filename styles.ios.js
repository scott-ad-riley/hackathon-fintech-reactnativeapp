import React, {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  windowContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  footerContainer: {
    alignItems: 'center',
    flex: 0.2,
  },
  iconContainer: {
    alignItems: 'center',
  },
  baseText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
  },
  welcomeText: {
    fontSize: 30,
    color: 'black',
  },
  icon: {
    margin: 70,
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
});

export {styles};