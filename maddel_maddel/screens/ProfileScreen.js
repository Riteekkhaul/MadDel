import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  FlatList,
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



const ProfilePage = ({ navigation }) => {
  const data = [
    { name: 'Account Details', icon: 'user' },
    { name: 'Whitelist', icon: 'heart' },
    { name: 'Order History', icon: 'truck' },
    { name: 'Settings', icon: 'gear' },
    { name: 'Contact Us', icon: 'phone' },
  ];

   const statusBarHeight = calculateStatusBarHeight();
   
  const ListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Icon name={item.icon} size={30} style={styles.icon} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={{ position: 'absolute', right: 50, color: 'gray' }}>
          <Icon name="angle-right" size={25} />
        </Text>
      </View>
    );
  };

  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out successfully');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>
            <Icon name="arrow-left" size={25} />
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: 'gray', fontWeight: 'bold' }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text>
            <Icon name="cart-plus" size={25} />
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: 2 }}></View>

      <View style={styles.header}>
        <Image
          source={require('../assets/hero.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.container_List}
      />

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          <Text style={styles.sectionContent}>123 Main Street</Text>
          <Text style={styles.sectionContent}>New York, USA</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.sectionContent}>Phone: +1 123-456-7890</Text>
          <Text style={styles.sectionContent}>Email: johndoe@example.com</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginVertical: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 5,
  },
  section: {
    marginBottom: 24,
    marginLeft: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 4,
  },
  container_List: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 10,
    backgroundColor: '#F8F8FF',
    paddingVertical: 5,
  },
  icon: {
    width: 40,
    paddingHorizontal: 5,
  },
  itemName: {
    fontSize: 25,
    color: '#555555',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
