import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cart from '../screens/CartScreen';

const CartButtons = ({navigation}) => {
  const handleAddToCart = () => {
    // console.log("Item added to cart");
    navigation.navigate("Cart");

  };

  const handleBuyNow = () => {
     //console.log("Item added to cart Processed for Payment");
       navigation.navigate("Cart");
       
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddToCart}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buyButton]}
        onPress={handleBuyNow}
      >
        <Text style={[styles.buttonText, styles.buyButtonText]}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CartButtons;
