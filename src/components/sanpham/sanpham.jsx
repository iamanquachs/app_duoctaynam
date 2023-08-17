import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
export default function Sanpham({hanghoa}) {
  const [soluong, setSoluong] = useState('1');
  const tangsoluong = e => {
    setSoluong((parseInt(soluong) + 1).toString());
  };
  const giamsoluong = e => {
    if (soluong > 0) {
      setSoluong((parseInt(soluong) - 1).toString());
    }
  };
  const source = {
    html:
      `<div style='color:#000; font-size:16px'>` +
      hanghoa.tenhoatchat +      

      
      `</div>`,
  };
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'darkgreen',
          fontWeight: 600,
          fontSize: 16,
          marginBottom: 10,
        }}>
        {hanghoa.tenhh}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
          gap: 10,
        }}>
        <Image
          style={{width: 180, height: 180}}
          src={'https://erp.duoctaynam.vn/upload/sanpham/' + hanghoa.path_image}
        />
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 5,
            marginTop: 20,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              maxHeight: 30,
              overflow: 'hidden',
              width: '100%',
            }}>
            <Text style={styles.dot}>●</Text>
            <Text style={{width: '100%', height: 30,position:'absolute', top:-16, left:13,}} >
              <RenderHtml contentWidth={width} source={source} />
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.dot}>●</Text>
            <Text style={styles.mota}>{hanghoa.tennhom}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.dot}>●</Text>
            <Text style={styles.mota}>{hanghoa.quycach}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.dot}>●</Text>
            <Text style={styles.mota}>{hanghoa.standard}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.dot}>●</Text>
            <Text style={styles.mota}>{hanghoa.tennhasx}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.dot}>●</Text>
            <Text style={styles.mota}>{hanghoa.country}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', gap: 3}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../assets/heart.png')}
          />
          <Text style={{color: '#000', fontSize:16}}>2000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../assets/price.png')}
          />
          <Text style={{color: 'red', fontSize:16}}>{hanghoa.chitu}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 35,
          width: '100%',
          gap: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 5,
            width: '48%',
            height: 35,
          }}>
          <TouchableOpacity onPress={e => giamsoluong(e)}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/minus.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              color: 'black',
              height: 40,
              textAlign: 'center',
            }}
            value={soluong}
            onChange={e => setSoluong(e.target.value)}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={e => tangsoluong(e)}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              height: '100%',
              width: '48%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff', fontSize:16}}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  dot: {
    fontWeight: 'bold',
    color: 'black',
  },
  mota: {
    fontSize: 16,
    color: 'black',
  },
});
