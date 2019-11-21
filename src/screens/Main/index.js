import React, {useState, useEffect} from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import itsamatch from '../../assets/itsamatch.png';

import styles from './styles';

export default function Main({navigation}) {
  const id = navigation.getParam('user');
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const reponse = await api.get('/devs', {
        headers: {user: id},
      });

      setUsers(reponse.data);
    }
    loadUsers();
  }, [id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: {user: id},
    });

    socket.on(
      'match',
      dev => {
        setMatchDev(dev);
      },
      [id],
    );
  });

  async function handleLike() {
    const [user, ...rest] = users;
    await api.post(`/devs/${user._id}/like`, null, {
      headers: {user: id},
    });

    setUsers(rest);
  }

  async function handleDeslike() {
    const [user, ...rest] = users;
    await api.post(`/devs/${user._id}/notlike`, null, {
      headers: {user: id},
    });

    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>
      <View style={styles.cardsContainer}>
        {users.length === 0 ? (
          <Text style={styles.empty}>Não existe outro dev.</Text>
        ) : (
          users.map((user, index) => (
            <View
              key={user._id}
              style={[styles.card, {zIndex: users.length - index}]}>
              <Image
                style={styles.avatar}
                source={{
                  uri: user.avatar,
                }}
              />
              <View style={styles.footer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.bio} numberOfLines={2}>
                  {user.bio}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
      {users.length > 0 && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleDeslike}>
            <Image source={dislike} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Image source={like} />
          </TouchableOpacity>
        </View>
      )}

      {matchDev && (
        <View style={styles.matchContainer}>
          <Image source={itsamatch} />
          <Image
            style={styles.matchAvatar}
            source={{
              uri: '"https://avatars0.githubusercontent.com/u/16529958?v=4',
            }}
          />
          <Text style={styles.matchName}>Renê Soares</Text>
          <Text style={styles.matchBio}>Renê Soares</Text>

          <TouchableOpacity onPress={() => setMatchDev(false)}>
            <Text style={styles.matchClose}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
