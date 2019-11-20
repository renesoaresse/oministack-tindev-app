import React, {useState, Component} from 'react';

import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  async function handleLogin() {
    const response = await api.post('/devs', {username: user});

    const {_id} = response.data;

    console.log(_id);
  }

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
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
