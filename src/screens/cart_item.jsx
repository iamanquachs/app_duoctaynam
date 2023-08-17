import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function CartItem() {
  const [soluong, setSoluong] = useState(0);

  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  return (
    <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
      <CheckBox
        style={{width: '10%'}}
        value={toggleCheckBox2}
        onValueChange={newValue => setToggleCheckBox2(newValue)}
      />
      <View style={{width: '80%', gap: 5}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
          }}>
          <View style={{width: '25%'}}>
            <Text style={{color: '#000', textAlign: 'right'}}>Sản phẩm</Text>
          </View>
          <Text style={{color: 'green'}}>Bổ phế nam hà</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
          }}>
          <View style={{width: '25%'}}>
            <Text style={{color: '#000', textAlign: 'right'}}>Giá gốc</Text>
          </View>
          <Text style={{color: '#000'}}>0 đ/Hộp</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
          }}>
          <View style={{width: '25%'}}>
            <Text style={{color: '#000', textAlign: 'right'}}>Số lượng</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 5,
              width: 120,
              height: 25,
            }}>
            <TouchableOpacity onPress={e => giamsoluong(e)}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/icon/minus.png')}
              />
            </TouchableOpacity>
            <Text>{soluong}</Text>
            {/* <TextInput
              style={{
                color: 'black',
                height: 25,
                textAlign: 'center',
              }}
              value={soluong}
              // onChange={e => setSoluong(e.target.value)}
              keyboardType="numeric"
            /> */}
            <TouchableOpacity onPress={e => tangsoluong(e)}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/icon/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
          }}>
          <View style={{width: '25%'}}>
            <Text style={{color: '#000', textAlign: 'right'}}>Thành tiền</Text>
          </View>
          <Text style={{color: '#000'}}>100.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
          }}>
          <View style={{width: '25%'}}>
            <Text style={{color: '#000', textAlign: 'right'}}>Chiết khấu</Text>
          </View>
          <Text style={{color: '#000'}}>0 (0%)</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
          }}>
          <View style={{width: '25%'}}>
            <Text style={{color: '#000', textAlign: 'right'}}>Thanh toán</Text>
          </View>
          <Text style={{color: 'red'}}>0</Text>
        </View>
      </View>
      <View style={{width: '10%'}}>
        <Image source={require('../../assets/icon/trash.png')} />
      </View>
    </View>
  );
}
