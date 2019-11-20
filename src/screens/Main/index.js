import React from 'react';

import {SafeAreaView, Image, View, Text} from 'react-native';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Diego Fernandes</Text>
            <Text style={styles.bio}>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </Text>
          </View>
        </View>
      </View>
      <View />
    </SafeAreaView>
  );
}
