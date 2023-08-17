import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import userApi from '../api/userApi';
export default function Login({handleNotification}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async e => {
    try {
      // const params = {
      //   user,
      //   pass,
      // };
      // const response = await userApi.getpk(params);
    } catch (error) {}
  };
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
        <Image
          style={{width: 60, height: 60, marginVertical: 20}}
          source={require('../../assets/logo.png')}
        />
        <Text
          style={{fontWeight: 800, width: 300, fontSize: 24, color: 'black'}}>
          Chào mừng đến với duoctaynam.vn
        </Text>
        <View style={{width: '100%', marginVertical: 50}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#ddd',
              paddingHorizontal: 15,
              width: '100%',
              fontSize: 16,
            }}
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Số Điện thoại"
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={handleNotification}
            style={{
              width: '100%',
              borderRadius: 20,
              backgroundColor: 'darkgreen',
              marginVertical: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                padding: 10,
                fontSize: 16,
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
