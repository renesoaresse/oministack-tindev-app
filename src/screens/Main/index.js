import React from 'react';

import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import styles from './styles';

export default function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Diego Fernandes</Text>
            <Text style={styles.bio} numberOfLines={2}>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
