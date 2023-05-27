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



const calculateStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return getStatusBarHeight();
  } else {
    // On iOS, StatusBar.currentHeight gives the status bar height
    return StatusBar.currentHeight || 0;
  }
};


export default function CartScreen({ navigation }) {

    const statusBarHeight = calculateStatusBarHeight();
    
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: require('../assets/icon.png'),
      drugName: 'Drug 1',
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      image: require('../assets/icon.png'),
      drugName: 'Drug 2',
      price: 20,
      quantity: 2,
    },
    {
      id: 3,
      image: require('../assets/icon.png'),
      drugName: 'Drug 3',
      price: 15,
      quantity: 3,
    },
    {
      id: 4,
      image: require('../assets/icon.png'),
      drugName: 'Drug 4',
      price: 25,
      quantity: 4,
    },
  ]);

  const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    const { image, drugName, price, quantity } = item;

    return (
      <View style={styles.cartItem}>
        <Image source={image} style={styles.image} />
        <View style={styles.itemDetails}>
          <View style={styles.namePriceContainer}>
            <Text style={styles.drugName}>{drugName}</Text>
            <Text style={styles.brand}>BrandName</Text>
            <Text style={styles.price}>Price: Rs.{price}</Text>
          </View>
        </View>
        <View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={onDecrease}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={onIncrease}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleProceed = () => {
    navigation.navigate('Checkout');
  };

  return (
    <ScrollView style={{paddingTop: statusBarHeight}}>
     
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.Go_back}>
              <Icon name="arrow-left" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 90 }}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            My Cart
          </Text>
          <Text style={{ color: 'gray', marginTop: 5 }}>3 items in Totals</Text>
        </View>
      </View>

      <View style={styles.location_con}>
        <Icon name="street-view" size={30} />
        <Text style={{ fontSize: 18, paddingTop: 3 }}>
          {' '}
          Ambedkar-chowk,Tumsar{' '}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'blue' }}>
          {' '}
          change
        </Text>
      </View>

      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onIncrease={() => increaseQuantity(item.id)}
                onDecrease={() => decreaseQuantity(item.id)}
                onRemove={() => removeItem(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        </ScrollView>
      </View>

      <View style={styles.order_info}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 20,
            borderRadius: 20,
            paddingTop: 10,
          }}>
          <Icon name="truck" size={30} />
          <Text style={{ fontSize: 20, marginLeft: 10 }}> Order Info : </Text>
        </View>
        <View style={styles.order_info_fields_container}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>Rs. 4599 /-</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Shipping Cost</Text>
            <Text style={styles.value}>Rs.45 /-</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.value}>-20 %</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={[styles.label, styles.totalLabel]}>Total Payable</Text>
            <Text style={[styles.value, styles.totalValue]}>Rs. 4259 /-</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.place_order_btn_con}
        onPress={handleProceed}>
        <Text style={styles.place_order_btn}>Place Order</Text>
        <Text style={styles.place_order_btn_price}>Rs. 4259 /-</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Go_back: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
  },
  list: {
    height: 300,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  namePriceContainer: {
    flexDirection: 'column',
  },
  drugName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  removeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  location_con: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 2,
    margin: 10,
  },
  order_info: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: 'gray',
    margin: 10,
    padding: 5,
  },
  order_info_fields_container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  totalLabel: {
    color: '#555555',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  place_order_btn_con: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '90%',
    height: 60,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  place_order_btn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    paddingVertical: 15,
  },
  place_order_btn_price: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 5,
    height: 40,
    paddingVertical: 3,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
});
