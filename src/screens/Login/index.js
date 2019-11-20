import React, {useState, useEffect} from 'react';

import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@Tindev:user').then(user => {
      if (user) {
        navigation.navigate('Main', {user});
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', {username: user});

    const {_id} = response.data;

    await AsyncStorage.setItem('@Tindev:user', _id);

    navigation.navigate('Main', {_id});
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
