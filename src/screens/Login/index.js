import React, {Component} from 'react';

import {SafeAreaView, Image, TextInput} from 'react-native';

import logo from '../../assets/logo.png';
import styles from './styles';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={logo} />

        <TextInput
          placeholder="Digite seu usuário no GitHub."
          style={styles.input}
        />
      </SafeAreaView>
    );
  }
}
