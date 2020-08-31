import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native'
import uuid  from 'uuid';
import ListItem from './Components/ListItem'
import Header from './Components/Header'
import AddItem from './Components/AddItem'
import { AppLoading} from 'expo';
import { 
  OpenSans_600SemiBold,
  OpenSans_400Regular,
  useFonts
} from '@expo-google-fonts/open-sans'

const App = () => {
let [fontsLoaded] = useFonts({
  OpenSans_400Regular,
  OpenSans_600SemiBold
});

if (!fontsLoaded) {
  return <AppLoading />
}


  return (
    <View style = {styles.container}>
      <Header title='Dashboard' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35
  }

});

export default App;