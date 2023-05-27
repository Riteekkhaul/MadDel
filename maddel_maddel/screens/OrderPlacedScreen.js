// Aboutscreen.js
import React, { Component, useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const OrderPlacedScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.main_con}>

        <View style={styles.circle}>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            <Icon name="check" size={60} />
          </Text>
        </View>

        <View style={styles.info_con}>
          <Text style={styles.title}> Order Placed!</Text>
          <Text style={styles.info}> Your Order was placed successfully.</Text>
          <Text style={styles.track}>
            You can track your Order status in My Order Tab.
          </Text>
          <Text style={styles.title}> Thank you!</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.home_btn_con}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.Home_btn}>Back To Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderPlacedScreen;

const styles = StyleSheet.create({
  main_con: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007FFF',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign:"center",
    marginHorizontal:50,
  },
  info_con:{
     justifyContent:"center",
     alignItems:"center",
     marginTop:20,
  },
  info: {
    color: 'white',
    fontSize: 18,
  },
  track: {
    color: 'white',
    fontSize: 14,
  },
  home_btn_con: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop:20,
  },
  Home_btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    color:"#007FFF",
    fontSize:22,
    fontWeight:"bold",
  },
});
