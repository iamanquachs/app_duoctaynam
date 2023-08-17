import Reac, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Cart from './src/screens/cart';
import Login from './src/screens/login';
import Header from './src/components/header';
import Sanpham_chitiet from './src/components/sanpham/sanpham_chitiet';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Home />
    </View>
  );
}
function CartScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Cart />
    </View>
  );
}
function SanphamDetail_Screen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Sanpham_chitiet />
    </View>
  );
}
function Trangchu() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
          headerTitle: props => <Header {...props} />,
          tabBarIcon: () => {
            return (
              <View
                style={{width: '100%', paddingHorizontal: 10, paddingTop: 10}}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image
                      style={{width: 170, height: 16}}
                      source={require('./assets/logo_chu.png')}
                    />
                  </View>
                  <View style={{flexDirection: 'row', gap: 8}}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('./assets/icon/phone-call.png')}
                    />
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('./assets/icon/zalo.png')}
                    />
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('./assets/icon/share.png')}
                    />
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('./assets/icon/move-up.png')}
                    />
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trangchu"
          component={Trangchu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sanpham_chitiet"
          component={SanphamDetail_Screen}
          options={{
            title: 'Chi tiết sản phẩm',
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Giỏ hàng',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
