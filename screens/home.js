import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
    return(
        <View style= {globalStyles.container}>
            <Text style= {globalStyles.mainFont}> Home Screen </Text>
            <Button title= 'go to review screen' onPress={() => {navigation.navigate('ReviewDetails')}}/>
        </View>
    )
}