import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import DrugDetailsScreen from './screens/DrugDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductCategoryScreen from './screens/ProductsCategoryScreen';
import ProductsScreen from './screens/ProductsScreen';
import CheckOutScreen from './screens/CheckOutScreen';
import OrderPlacedScreen from './screens/OrderPlacedScreen';

const Stack = createNativeStackNavigator();

 const App=()=> {
  return (
  <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="ProductCategory" component={ProductCategoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="DrugDetails" component={DrugDetailsScreen} />
        <Stack.Screen name="Checkout" component={CheckOutScreen} />
        <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
