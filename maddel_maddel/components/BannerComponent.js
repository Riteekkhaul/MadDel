import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BannerComponent =({navigation})=>{

   const data = [
    {id:1, name: 'Paracetamol', price: 5.99, image: require('../assets/hero.png') },
    {id:2, name: 'Ibuprofen', price: 8.99, image: require('../assets/hero.png') },
    {id:3, name: 'Paracetamol', price: 5.99, image: require('../assets/hero.png') },
    {id:4, name: 'Ibuprofen', price: 8.99, image: require('../assets/hero.png') },
    {id:5, name: 'Paracetamol', price: 5.99, image: require('../assets/hero.png') },
    {id:6, name: 'Ibuprofen', price: 8.99, image: require('../assets/hero.png') },
    // Add more product data as needed
  ];

  return(
     <View style={styles.container}>
       <FlatList
       horizontal
       data={data}
       keyExtractor={(item) => item.id}
       renderItem={({ item }) => (
         <Image source={require('../assets/hero.jpg')}   style={styles.card} />
        )}
      />
     </View>
  );
}


export default BannerComponent;


const styles = StyleSheet.create({
    container: {
    width:'100%',
    height:200,
  },   
   card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 340,
    height: 180,
  },
})