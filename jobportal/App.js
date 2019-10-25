import React from 'react';
import { SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import MainStack from './src/stacks/'
import { store } from './src/store/'
import { NavigationActions } from 'react-navigation'
import NavigationService from "./src/services/NavigationServices";



const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <MainStack 
         ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
      </Provider>
    </>
  );
};
const styles = StyleSheet.create({
});
export default App;
