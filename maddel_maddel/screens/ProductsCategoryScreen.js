import React from 'react';
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



const ProductCategoryScreen = ({ navigation }) => {
  const products = [
    { name: 'Paracetamol', price: 5.99, image: require('../assets/hero.png') },
    { name: 'Ibuprofen', price: 8.99, image: require('../assets/hero.png') },
    { name: 'Paracetamol', price: 5.99, image: require('../assets/hero.png') },
    { name: 'Ibuprofen', price: 8.99, image: require('../assets/hero.png') },
    { name: 'Paracetamol', price: 5.99, image: require('../assets/hero.png') },
    { name: 'Ibuprofen', price: 8.99, image: require('../assets/hero.png') },
    // Add more product data as needed
  ];

   const statusBarHeight = calculateStatusBarHeight();

   
  return (
    <SafeAreaView style={{ paddingTop: statusBarHeight,}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ margin: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          <Icon name="arrow-left" size={25} />
        </Text>
      </TouchableOpacity>

      <Text style={{ margin: 10, fontSize: 16, fontWeight: 'bold' }}>
        Medicines by Category : Category_Name{' '}
      </Text>

      <ScrollView>
        <View style={styles.container}>
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={styles.productContainer}
              onPress={() => navigation.navigate('DrugDetails')}>
              <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.drugName}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  productContainer: {
    width: '48%', // Adjust this value to fit two products horizontally
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 8,
  },
  drugName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#888888',
  },
});

export default ProductCategoryScreen;
