import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello Word</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
