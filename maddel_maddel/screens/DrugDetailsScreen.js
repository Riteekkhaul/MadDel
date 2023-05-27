import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
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



const Card = ({ drugName, drugPrice, description, brandName, imageUrl }) => {
  return (
    <View style={styles.container_rec}>
      <Image source={{ uri: imageUrl }} style={styles.image_rec} />
      <View style={styles.detailsContainer_rec}>
        <Text style={styles.drugName_rec}>{drugName}</Text>
        <Text style={styles.brandName_rec}>{brandName}</Text>
        <Text style={styles.drugPrice_rec}>Price: {drugPrice}</Text>
        <Text style={styles.description_rec}>{description}</Text>
      </View>
    </View>
  );
};

const DrugDetailsScreen = ({ navigation }) => {

  const [data, setData] = useState([]);

   const statusBarHeight = calculateStatusBarHeight();
   
  const FetchAllData = async () => {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8781b3cd51msh5d26f73ab061859p173437jsn658df8d0544f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.results);
      setData(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  const CartButtons = () => {
    const handleAddToCart = () => {
      // console.log("Item added to cart");
      navigation.navigate('Cart');
    };

    const handleBuyNow = () => {
      //console.log("Item added to cart Processed for Payment");
      navigation.navigate('Cart');
    };

    return (
      <View style={styles.container_btn}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buyButton]}
          onPress={handleBuyNow}>
          <Text style={[styles.buttonText, styles.buyButtonText]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    FetchAllData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20,marginLeft:10,marginBottom:5}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            <Icon name="arrow-left" size={25} />
          </Text>
        </TouchableOpacity>
        <View>
          <Image
            source={{
              uri: 'https://5.imimg.com/data5/SELLER/Default/2021/12/UN/GR/ZW/15933117/paracetamol-and-domperidone-tablets-500x500.jpg',
            }}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.drugName}>Paracetamol</Text>
            <Text style={styles.brandName}>Brand Name</Text>
            <Text style={styles.drugPrice}>Price: $5.99</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus dolor sit amet nisl ultricies bibendum. Duis commodo
              lobortis suscipit.
            </Text>
            <CartButtons />
          </View>
        </View>

        <Text style={{ margin: 10, fontSize: 16, fontWeight: 'bold' }}>
          Reccomended Products :
        </Text>

        <View >
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DrugDetails')}>
                <Card
                  drugName="Paracetamol"
                  drugPrice="$5.99"
                  description="Fever"
                  brandName="Brand Name"
                  imageUrl="https://5.imimg.com/data5/SELLER/Default/2021/12/UN/GR/ZW/15933117/paracetamol-and-domperidone-tablets-500x500.jpg"
                />
              </TouchableOpacity>
            )}
          />
        </View>

        <TouchableOpacity style={styles.maddy_con}>
          <Text style={styles.maddy_text}>
           <Icon name="comment" size={25} />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  drugName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  brandName: {
    fontSize: 18,
    color: '#888888',
    marginBottom: 8,
  },
  drugPrice: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  container_rec: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
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
  image_rec: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer_rec: {
    flex: 1,
    justifyContent: 'center',
  },
  drugName_rec: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  brandName_rec: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 8,
  },
  drugPrice_rec: {
    fontSize: 14,
    marginBottom: 8,
  },
  description_rec: {
    fontSize: 14,
  },
  container_btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#e74c3c',
  },
  buyButtonText: {
    fontSize: 18,
  },
  maddy_con: {
    position:"absolute",
    bottom:5,
    right:5,
    padding: 10,
    backgroundColor: '#6A0DAD',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  maddy_text: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
});

export default DrugDetailsScreen;
