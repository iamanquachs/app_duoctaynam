import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Sanpham from '../components/sanpham/sanpham';
import hanghoaApi from '../api/hanghoaApi';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [banchay, setBanchay] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const banchayHandle = async e => {
      try {
        const params = {
          mshh: '',
          soluong: '15',
        };
        const response = await hanghoaApi.list_hot_items(params);
        setBanchay(response);
      } catch (error) {}
    };
    banchayHandle();
  }, []);
  return (
    <View style={{backgroundColor: '#f1fafe'}}>
      <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
        <ScrollView>
          <View style={{height: 160, borderRadius: 10}}>
            <Swiper
              showsButtons={true}
              showsPagination={true}
              autoplay={true}
              delay={2000}>
              <Image
                style={styles.image_swiper}
                source={require('../../assets/quangcao/quangcao1.png')}
              />
              <Image
                style={styles.image_swiper}
                source={require('../../assets/quangcao/quangcao2.png')}
              />
              <Image
                style={styles.image_swiper}
                source={require('../../assets/quangcao/quangcao3.png')}
              />
            </Swiper>
          </View>

          {banchay.map((hanghoa, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                key={key}
                onPress={() =>
                  navigation.navigate('Sanpham_chitiet', {
                    url: hanghoa.url,
                    mshh: hanghoa.mshh,
                  })
                }>
                <Sanpham hanghoa={hanghoa} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  image_swiper: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
});
