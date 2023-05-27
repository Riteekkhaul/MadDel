// Homescreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  StatusBar,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const calculateStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return getStatusBarHeight();
  } else {
    // On iOS, StatusBar.currentHeight gives the status bar height
    return StatusBar.currentHeight || 0;
  }
};



const HomeScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: 'Paracetamol',
      price: 5.99,
      image: require('../assets/hero.png'),
    },
    {
      id: 2,
      name: 'Ibuprofen',
      price: 8.99,
      image: require('../assets/hero.png'),
    },
    {
      id: 3,
      name: 'Paracetamol',
      price: 5.99,
      image: require('../assets/hero.png'),
    },
    {
      id: 4,
      name: 'Ibuprofen',
      price: 8.99,
      image: require('../assets/hero.png'),
    },
    {
      id: 5,
      name: 'Paracetamol',
      price: 5.99,
      image: require('../assets/hero.png'),
    },
    {
      id: 6,
      name: 'Ibuprofen',
      price: 8.99,
      image: require('../assets/hero.png'),
    },
    // Add more product data as needed
  ];

  const statusBarHeight = calculateStatusBarHeight();


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

  return (
    <SafeAreaView style={{ paddingTop: statusBarHeight}}>
      <View style={styles.main_con}>
        <Text style={styles.title}>MedDel</Text>
        <TextInput placeholder="Search a Med..." style={styles.search_imput} />
        <TouchableOpacity
          style={styles.gol}
          onPress={() => navigation.navigate('Profile')}>
          <Text
            style={{
              marginTop: 7,
              color: 'white',
              fontSize: 25,
              marginLeft: 12,
            }}>
            <Icon name="user" size={25} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gol}
          onPress={() => navigation.navigate('Cart')}>
          <Text
            style={{
              marginTop: 7,
              color: 'white',
              fontSize: 25,
              marginLeft: 8,
            }}>
            <Icon name="cart-plus" size={25} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={require('../assets/hero.jpg')} style={styles.card} />
          )}
        />
      </View>

      <View>
        <Text style={{ fontSize: 22, margin: 10, color: '#9370DB' }}>
          Brows Medicines & Health Products
        </Text>

        <View style={styles.category_container}>
          <TouchableOpacity
            style={styles.category_card}
            onPress={() => navigation.navigate('ProductCategory')}>
            <Image
              source={require('../assets/bodyCare.jpg')}
              style={styles.cat_img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category_card}
            onPress={() => navigation.navigate('ProductCategory')}>
            <Image
              source={require('../assets/sexual.jpg')}
              style={styles.cat_img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category_card}
            onPress={() => navigation.navigate('ProductCategory')}>
            <Image
              source={require('../assets/fitness.jpg')}
              style={styles.cat_img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category_card}
            onPress={() => navigation.navigate('ProductCategory')}>
            <Image
              source={require('../assets/alternate.jpg')}
              style={styles.cat_img}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fre_brought}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Frequently brought :
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Text style={{ paddingTop: 5, color: 'blue' }}>View All > </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main_container_rec}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DrugDetails')}>
              <CardComponent />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_con: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  search_imput: {
    borderWidth: 1,
    borderRadius: 8,
    width: 160,
    marginLeft: 10,
    marginRight: 5,
    padding: 5,
    borderColor: '#98AFC7',
  },
  fre_brought: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'space-between',
    padding: 10,
  },
  gol: {
    width: 40,
    height: 40,
    borderRadius: '100%',
    backgroundColor: 'blue',
    marginLeft: 10,
  },
  container: {
    width: '100%',
    height: 200,
  },
  category_container: {
    width: '100%',
    height: 200,
    flexWrap: 'wrap',
  },
  category_card: {
    backgroundColor: '#A0EFE2',
    margin: 8,
    width: 180,
    height: 80,
    borderRadius: 8,
  },
  cat_img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 340,
    height: 180,
  },
  main_container_rec: {
    width: '100%',
    height: 250,
  },
  container_rec: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 5,
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
});

export default HomeScreen;
