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

const CategoryComponent =({navigation})=>{
  return(
       <View style={styles.category_container}> 
          <TouchableOpacity style={styles.category_card} 
             onPress={()=>navigation.navigate("ProductCategory")} >
            <Image source={require("../assets/bodyCare.jpg")} style={styles.cat_img} />
         </TouchableOpacity >
         <TouchableOpacity style={styles.category_card} 
             onPress={()=>navigation.navigate("ProductCategory")} >
           <Image source={require("../assets/sexual.jpg")}  style={styles.cat_img} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.category_card} 
          onPress={()=>navigation.navigate("ProductCategory")}  >
          <Image source={require("../assets/fitness.jpg")}  style={styles.cat_img} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.category_card} 
          onPress={()=>navigation.navigate("ProductCategory")} >
          <Image source={require("../assets/alternate.jpg")}  style={styles.cat_img} />
         </TouchableOpacity>
        </View>
  );
}

export default CategoryComponent;


const styles = StyleSheet.create({
  category_container:{
    width:'100%',
    height:200,
    flexWrap:'wrap'
  },
  category_card:{
    backgroundColor: '#A0EFE2',
    margin: 5,
    width: 170,
    height: 80,
    borderRadius: 8,
  },
  cat_img:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
})
