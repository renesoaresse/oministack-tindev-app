import React, {Component} from 'react';

import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Login</Text>
      </SafeAreaView>
    );
  }
}
