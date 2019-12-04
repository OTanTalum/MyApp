import React, { Component } from 'react';
import {StyleSheet, Image, View,Text} from 'react-native';


export default class Main extends Component{

  render() {
    let pic = {
      uri: 'https://i0.wp.com/apptractor.ru/wp-content/uploads/2018/04/1_jh6bmapyE8nPWju7W_7qEw.png?w=796&ssl=1'
    };
    return (
        <View style={styles.background}>
        <Image source={pic} style={{width: 450, height: 250}}/>
        <Text style={styles.baseText}>Hello, I`m a Oleh</Text>
        </View>
    );
  }
}

const styles=StyleSheet.create({
    background:{
        backgroundColor: '#1a1a39',
        alignItems: 'center',
    },
    baseText:{
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 28,
    }
});
