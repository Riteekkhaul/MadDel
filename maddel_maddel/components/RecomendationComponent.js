import React,{useEffect ,useState} from "react";
import {  View, Text,SafeAreaView, StyleSheet,TextInput, FlatList ,Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import CardComponent from '../components/CardComponent';

const ReccomendationComponent =({navigation})=>{

  
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
       <View style={styles.main_container_rec}>
        <FlatList
         horizontal
         data={data}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate("DrugDetails")}> 
            <CardComponent />
          </TouchableOpacity> 
        )}
      />
      </View>
    );
}

 export default ReccomendationComponent;

 
const styles = StyleSheet.create({
  main_container_rec:{
    width:'100%',
    height:250,
  },
})