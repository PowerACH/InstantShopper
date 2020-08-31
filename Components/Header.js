import React from 'react';
import {View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'



const Header = (props) => {
  return (
    <View style = {styles.header}>
      <Icon name="nav-icon" size={20} color="#ff0000"/>
      <Text style = {styles.text}>{props.title}</Text>
      <Icon style = {styles.Icon} name="hipchat" size={20} color="#ff0000"/>
    </View>
  );
};

//Link to icons:
//https://github.com/oblador/react-native-vector-icons#animation


const styles = StyleSheet.create({
  header: {
    height: 55,
    padding: 15,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  text: {
    color:'black',
    fontSize: 21,
    paddingLeft: 20,
    fontFamily: "OpenSans_600SemiBold"
  },
  icon: {
    
  }

});

export default Header;