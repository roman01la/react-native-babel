import React from 'react-native';

let { AppRegistry, StyleSheet, Text, View } = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  }
});

let ReactNativeBabel = React.createClass({

  render() {

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This app is built using ES6, Babel and webpack.
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/app.jsx
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('react-native-babel', () => ReactNativeBabel);
