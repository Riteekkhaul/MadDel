import React, { Component , useState, useEffect } from "react";
import { Button, View, Text , SafeAreaView,Image,FlatList , StyleSheet,TextInput ,TouchableOpacity , ScrollView} from "react-native";


const CardComponent = () => {
  return (
    <View style={styles.container_rec}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/hero.png')}
          style={styles.image_rec}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.drugName_rec}>Paracetamol</Text>
        <Text style={styles.price_rec}>$5.99</Text>
      </View>
    </View>
  );
};

export default CardComponent;


const styles = StyleSheet.create({
   container_rec: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginHorizontal:5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    height: '75%',
    marginBottom: 8,
  },
  image_rec: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  drugName_rec: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price_rec: {
    fontSize: 16,
    color: '#888888',
  },
})