import React from 'react';
import { SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import MainStack from './src/stacks/'

const App: () => React$Node = () => {
  return (
    <>
      <MainStack />
    </>
  );
};
const styles = StyleSheet.create({
});

export default App;
