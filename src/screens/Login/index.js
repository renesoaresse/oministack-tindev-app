import React, {Component} from 'react';

import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import logo from '../../assets/logo.png';
import styles from './styles';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}>
        <Image source={logo} />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário no GitHub."
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
