import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Screen} from 'react-native-screens';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container_100}>
      <Image
        style={{width: 30, height: 30}}
        source={require('../../assets/menu.png')}
      />
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 5,
          width: 250,
          flexDirection: 'row',
        }}>
        <View style={styles.inputSearch}>
          <Image
            style={styles.logoDTN}
            source={require('../../assets/logo.png')}
          />
          <TextInput
            id="searchKey"
            style={styles.input}
            // onChangeText={text => setKeySearch(text)}
            placeholder="Tìm kiếm ..."
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{display: 'none'}}>
          <Image
            style={styles.img_header}
            source={require('../../assets/bell.png')}
          />
          <Text style={styles.img_header_num}>2</Text>
        </View>
        <View style={{marginHorizontal: 8}}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              style={styles.img_header}
              source={require('../../assets/cart_header.png')}
            />
            <Text style={styles.img_header_num}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: 'none'}}>
          <Image
            style={styles.img_header_margin}
            source={require('../../assets/profile.png')}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container_100: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_header: {
    width: 30,
    height: 30,
    position: 'relative',
  },
  img_header_margin: {
    width: 30,
    height: 30,
    position: 'relative',
    marginBottom: 3,
  },
  img_header_num: {
    position: 'absolute',
    lineHeight: 19,
    fontWeight: 'bold',
    right: 0,
    top: -8,
    color: '#fff',
    borderRadius: 100,
    width: 20,
    height: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize: 12,
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    position: 'relative',
    borderRadius: 100,
    paddingLeft: 50,
    paddingRight: 40,
    paddingVertical: 7,
    width: '100%',
    height: 40,
    backgroundColor: '#e3e7e4',
  },
  logoDTN: {
    position: 'absolute',
    left: -2,
    zIndex: 2,
    width: 50,
    height: 50,
  },
  iconSearch: {
    position: 'absolute',
    right: 5,
  },
});
