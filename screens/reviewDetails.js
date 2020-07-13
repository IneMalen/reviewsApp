import {StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../styles/global';


import React from 'react';

export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating } = route.params;
  
    return (
      <View style={globalStyles.container}>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </View>
    );
  }