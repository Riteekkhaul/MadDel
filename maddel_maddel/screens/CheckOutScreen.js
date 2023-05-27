import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const calculateStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return getStatusBarHeight();
  } else {
    // On iOS, StatusBar.currentHeight gives the status bar height
    return StatusBar.currentHeight || 0;
  }
};



const CheckoutScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('Address');
  const [pinCode, setPinCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [landmark, setLandmark] = useState('');

  const items = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  const statusBarHeight = calculateStatusBarHeight();

  const totalPrice = items.reduce((total, item) => total + item.price, 0);
 

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleNextPress = () => {
    setActiveTab('Payment');
  };

  const handleNextPress2 = () => {
    setActiveTab('Summary');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Address':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.heading}>Enter your shipping address</Text>
            <Text style={styles.label}>Pin code *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your pin code"
              value={pinCode}
              onChangeText={(text) => setPinCode(text)}
            />
            <Text style={styles.label}>Full Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            <Text style={styles.label}>Street Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your street address"
              value={streetAddress}
              onChangeText={(text) => setStreetAddress(text)}
            />
            <Text style={styles.label}>Landmark</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter a landmark (optional)"
              value={landmark}
              onChangeText={(text) => setLandmark(text)}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextPress}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Payment':
        return (
          <View style={styles.tabContent}>
            <Text> Select a Payment Method</Text>
            <TouchableOpacity style={styles.Pay_box}>
              <Image
                source={require('../assets/debit.png')}
                style={styles.pay_box_img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Pay_box}>
              <Image
                source={require('../assets/upi.png')}
                style={styles.pay_box_img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Pay_box} onPress={handleNextPress2}>
              <Text style={styles.box_cod}>Cash On Delevery</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Summary':
        return (
          <View style={styles.tabContent}>
            <View>
              <Text style={styles.heading}>
                Please review and Submit Your Order
              </Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.heading}>Payment Method :</Text>
              <Text style={styles.tiletext}>Cash On Delevery</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.heading}>Shipping Address :</Text>
              <Text style={styles.tiletext}>Ambedkar Chowk,Tumsar-441905</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.heading}>Order Summary</Text>
              {items.map((item, index) => (
                <View key={index} style={styles.item}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>$ {item.price}</Text>
                </View>
              ))}
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalPrice}>$ {totalPrice}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('OrderPlaced')}>
              <Text style={styles.nextButtonText}>Submit Order</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Address' && styles.activeTab]}
          onPress={() => handleTabPress('Address')}>
          <Text style={styles.tabText}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Payment' && styles.activeTab]}
          onPress={() => handleTabPress('Payment')}>
          <Text style={styles.tabText}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Summary' && styles.activeTab]}
          onPress={() => handleTabPress('Summary')}>
          <Text style={styles.tabText}>Summary</Text>
        </TouchableOpacity>
      </View>
      {renderTabContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    marginLeft: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#4C4C6D',
    paddingVertical: 10,
    borderRadius: 5,
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Pay_box: {
    width: '95%',
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginVertical: 10,
  },
  pay_box_img: {
    width: '100%',
    height: '100%',
  },
  box_cod: {
    backgroundColor: '#004953',
    width: '100%',
    height: '100%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 50,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tile: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  tiletext: {
    marginVertical: 10,
  },
});

export default CheckoutScreen;
