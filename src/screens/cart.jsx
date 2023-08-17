import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-element-dropdown';
import CartItem from './cart_item';
export default function Cart() {
  const [soluong, setSoluong] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const tangsoluong = e => {
    setSoluong((parseInt(soluong) + 1).toString());
  };
  const giamsoluong = e => {
    if (soluong > 0) {
      setSoluong((parseInt(soluong) - 1).toString());
    }
  };
  const [dropdown, setDropdown] = useState(null);
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
  ];
  return (
    <View
      style={{
        backgroundColor: '#eeebeb',
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
      }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{color: 'red', fontSize: 17, fontWeight: 500}}>
            Đặt hàng
          </Text>
          <TouchableHighlight>
            <Text style={{color: 'green', fontSize: 17}}>Xóa tất cả</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{color: '#000', fontSize: 16}}>Chọn tất cả</Text>
        </View>
        <CartItem />
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{color: 'red', fontSize: 17, fontWeight: 500}}>
            Khách hàng
          </Text>
        </View>
        <View style={{marginHorizontal: 20, gap: 4}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('../../assets/icon/store.png')} />
            <Text style={{color: '#000', textTransform: 'uppercase'}}>
              Nhà thuốc TPSoft
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('../../assets/icon/user.png')} />
            <Text style={{color: '#000', textTransform: 'uppercase'}}>
              TPSoft
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('../../assets/icon/phone.png')} />
            <Text style={{color: '#000', textTransform: 'uppercase'}}>
              0853728151
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('../../assets/icon/address.png')} />
            <Text style={{color: '#000', textTransform: 'uppercase'}}>
              248 - Huynh Tan Phat - Rach Gia - Kien Giang
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{padding: 10, gap: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'red', fontSize: 17}}>Tổng tiền</Text>
            <Text style={{color: 'red', fontSize: 17}}>0 đ</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000', fontSize: 17}}>Mã quà tặng</Text>
            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={data}
              searchPlaceholder="Search"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Chọn mã quà tặng"
              value={dropdown}
              onChange={item => {
                setDropdown(item.value);
                console.log('selected', item);
              }}
              renderItem={() => (
                <View style={styles.item}>
                  <Text style={styles.textItem}>Item 1</Text>
                </View>
              )}
              textError="Error"
            />

            <Text style={{color: '#000', fontSize: 17}}>0 đ</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#000', fontSize: 17}}>Tiền tích lũy</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox value={true} />
              <Text style={{color: '#000', fontSize: 17}}>0 đ</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'red', fontSize: 17}}>Thanh toán</Text>
            <Text style={{color: 'red', fontSize: 17}}>0 đ</Text>
          </View>
          <TouchableHighlight
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'green',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Đặt hàng</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    marginTop: 10,
    borderRadius: 5,
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: 200,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
