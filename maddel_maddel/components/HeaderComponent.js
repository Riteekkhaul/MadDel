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

const HeaderComponent =({navigation})=>{
   return(
      <View style={styles.main_con}>
        <Text style={styles.title} >MedDel</Text>
        <TextInput placeholder="Search a Med..." style={styles.search_imput} />
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
          <Text style={styles.cart}><Icon name="cart-plus" size={30} /></Text>
        </TouchableOpacity>
      </View>
   )
}

export default HeaderComponent;

      // <Icon name="user" size={25} />
      //     

const styles = StyleSheet.create({
   main_con:{
     flexDirection:'row', 
     backgroundColor:'white',
     padding:10,
     },
     title:{
      fontSize:30, 
      fontWeight:'bold' , 
      marginTop:5,
     },
     search_imput:{
       borderWidth:1, 
       borderRadius:8, 
       width:170 , 
       marginHorizontal:5,
       marginRight:5,    
       paddingLeft:10, 
       borderColor:'#98AFC7',
     },
     cart:{
       marginHorizontal:5,
       padding:5,
     }
})