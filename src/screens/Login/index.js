import React, {Component} from 'react';

import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import logo from '../../assets/logo.png';
import styles from './styles';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} />

        <TextInput
          placeholder="Digite seu usuário no GitHub."
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
