import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native'
import uuid  from 'uuid';
import ListItem from './Components/ListItem'
import Header from './Components/Header'
import AddItem from './Components/AddItem'

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'}
  ]);

    const deleteItem = (id) => {
      setItems(previousItems => {
        return previousItems.filter(item => item.id != id);
      });
    }

    const addItem = (text) => {
      setItems(previousItems => {
        return [{id: uuid(), text}, ...previousItems];
      })
    }

  return (
    <View style = {styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem} />
      <FlatList data={items} 
      renderItem = {({item}) => (
        <ListItem item = {item} deleteItem = {deleteItem} />
      )}
      />
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