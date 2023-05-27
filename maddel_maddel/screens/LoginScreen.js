// Aboutscreen.js
import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const calculateStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return getStatusBarHeight();
  } else {
    // On iOS, StatusBar.currentHeight gives the status bar height
    return StatusBar.currentHeight || 0;
  }
};


const LoginScreen = ({ navigation }) => {

     const statusBarHeight = calculateStatusBarHeight();

  const handleLogin = () => {
    navigation.navigate('About');
  };

  return (
    <SafeAreaView style={styles.main_con}>
      <View style={styles.img_con}>
        <Image source={require('../assets/hero.jpg')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.heading}>Login </Text>
        <View>
          <TextInput placeholder="Username" style={styles.username} />
          <TextInput placeholder="Password" style={styles.password} />
          <Text style={{ margin: 10 }}>Forgot Password ?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginTop: 20 }}> OR</Text>
          <Text style={styles.logg_google}>Login With Google</Text>
          <Text style={styles.not_signed}>
            {' '}
            Not registered yet ? Register Now!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_con: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 40,
  },
  img_con: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  img: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  username: {
    marginTop: 7,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    borderWidth: 1,
  },
  password: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#4C4C6D',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logg_google: {
    marginTop: 10,
    backgroundColor: '#007FFF',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  not_signed: {
    marginTop: 20,
    color: 'blue',
    fontSize: 15,
  },
});

export default LoginScreen;
