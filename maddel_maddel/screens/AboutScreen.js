import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import ReccomendationComponent from '../components/RecomendationComponent';
import CategoryComponent from '../components/CategoryComponent';
import BannerComponent from '../components/BannerComponent';
import HeaderComponent from '../components/HeaderComponent';

const calculateStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return getStatusBarHeight();
  } else {
    // On iOS, StatusBar.currentHeight gives the status bar height
    return StatusBar.currentHeight || 0;
  }
};

const AboutScreen = ({ navigation }) => {

  const statusBarHeight = calculateStatusBarHeight();

  return (
    <SafeAreaView style={{paddingTop: statusBarHeight}}>
      <ScrollView>
        <HeaderComponent navigation={navigation} />
        <BannerComponent />
        <Text style={{fontSize:18,margin:5,color:'#9370DB'}}> 
          Brows Medicines & Health Products 
        </Text>
        <CategoryComponent navigation={navigation} />
        <View style={styles.fre_brought}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Frequently brought :</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Products")}>
          <Text style={{paddingTop:5, color:'blue'}}>View All > </Text>
        </TouchableOpacity>
       </View>
       <ReccomendationComponent navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
     fre_brought:{flexDirection:"row", 
     marginTop:5,
     marginBottom:5,
     justifyContent:"space-between",
     padding:10,
     },
})

