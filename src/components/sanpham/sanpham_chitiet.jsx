import React, {useEffect, useState} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import hanghoaApi from '../../api/hanghoaApi';
import {useWindowDimensions} from 'react-native';
import HTMLView from 'react-native-htmlview';
import RenderHtml from 'react-native-render-html';
function Sanpham_chitiet() {
  const {width} = useWindowDimensions();
  const route = useRoute();
  const url = route.params.url;
  const mshh = route.params.mshh;
  const [chitietsp, setChitietsp] = useState([]);
  const [chitiethanghoa, setChiTietHanghoa] = useState([]);
  const [hosogiaban, setHosogiaban] = useState([]);
  const [quycach, setQuyCach] = useState([]);
  const [soluong, setSoluong] = useState('0');
  const tangsoluong = e => {
    setSoluong((parseInt(soluong) + 1).toString());
  };
  const giamsoluong = e => {
    if (soluong > 0) {
      setSoluong((parseInt(soluong) - 1).toString());
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const chitietspHandle = async () => {
        try {
          const params = {
            mshh: mshh,
          };
          const response = await hanghoaApi.list_motasp(params);
          setChitietsp(response);
        } catch (error) {}
      };
      chitietspHandle();
      const handleHanghoa = async e => {
        try {
          const params = {
            url: url,
          };
          const response = await hanghoaApi.listchitietsp(params);
          setChiTietHanghoa(response);
        } catch (error) {
          console.log(error);
        }
      };
      handleHanghoa();
      const load_giaban_chitu = async e => {
        try {
          const params = {
            mshh: mshh,
          };
          const response = await hanghoaApi.load_giaban_chitu(params);
          setQuyCach(response[0].quycach);
        } catch (error) {
          console.log(error);
        }
      };
      load_giaban_chitu();
      const load_hosogiaban_chitiet = async e => {
        try {
          const params = {
            mshh: mshh,
          };
          const response = await hanghoaApi.load_hosogiaban(params);
          setHosogiaban(response);
        } catch (error) {
          console.log(error);
        }
      };
      load_hosogiaban_chitiet();
    }, []),
  );

  return (
    <ScrollView>
      <View style={{width: '100%', padding: 5}}>
        <View>
          {chitiethanghoa.map((chitiet, key) => {
            const source = {
              html: `<div style='color: #000;font-size:18px'>${chitiet.tenhoatchat.replace(
                '<p>',
                '<p style="margin:0">',
              )}</div>
            `,
            };
            return (
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 5,
                  shadowOpacity: 0.5,
                  shadowRadius: 3,
                  shadowOffset: {
                    height: 0,
                    width: 0,
                  },
                  elevation: 2,
                }}>
                <Text style={{color: 'green', fontSize: 20, fontWeight: 700}}>
                  {chitiet.tenhh}
                </Text>
                <View>
                  <View>
                    <Image
                      style={{width: '100%', height: 395}}
                      width={250}
                      height={250}
                      src={
                        'https://erp.duoctaynam.vn/upload/sanpham/' +
                        chitiet.path_image
                      }
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Nhóm
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>
                      {chitiet.tennhom}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Hoạt chất
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>
                      <RenderHtml contentWidth={width} source={source} />
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Hàm lượng
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>
                      {chitiet.hamluong}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Quy cách
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>{quycach}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Tiêu chuẩn
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>
                      {chitiet.standard}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Nhà sản xuất
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>
                      {chitiet.tennhasx}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{width: 150, color: '#000', fontSize: 18}}>
                      ● Nước sản xuất
                    </Text>
                    <Text style={{color: '#000', fontSize: 18}}>
                      {chitiet.country}
                    </Text>
                  </View>
                </View>
                {/* Giá bán */}
                <View
                  style={{
                    width: 250,
                    backgroundColor: '#eefcee',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}>
                  {hosogiaban.map((item, key) => {
                    return (
                      <View style={styles.giaban}>
                        <Text style={{color: '#000', fontSize: 17}}>
                          {item.sl_tuden + ' ' + item.dvt_ban}{' '}
                        </Text>
                        <Text style={{color: '#000', fontSize: 17}}>
                          {' '}
                          {item.giaban
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') +
                            '/' +
                            item.dvt_ban}{' '}
                        </Text>
                      </View>
                    );
                  })}
                </View>
                {/* Số lượng và đặt hàng */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderColor: '#ddd',
                      borderWidth: 1,
                      borderRadius: 20,
                      width: '42%',
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
                  <View>
                    <TouchableHighlight
                      style={{
                        borderRadius: 10,
                        backgroundColor: 'green',
                        height: 35,
                        width: 150,
                        alignItems:'center',
                        justifyContent:'center'
                      }}>
                      <Text style={{color:'#fff', fontSize:18}}>Thêm vào giỏ</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            );
          })}
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              shadowOpacity: 0.5,
              shadowRadius: 3,
              shadowOffset: {
                height: 0,
                width: 0,
              },
              elevation: 2,
            }}>
            {chitietsp.map((ctmota_hanghoa, key) => {
              const chidinh = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.chidinh.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              const chongchidinh = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.chongchidinh.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              const lieudung = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.lieudung.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              const tacdungphu = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.tacdungphu.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              const thantrong = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.thantrong.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              const tuongtacthuoc = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.tuongtacthuoc.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              const baoquan = {
                html: `<div style='color: #000;font-size:18px'>${ctmota_hanghoa.baoquan.replace(
                  '<p>',
                  '<p style="margin:0">',
                )}</div>`,
              };
              return (
                <View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Chỉ định
                    </Text>
                    <RenderHtml contentWidth={width} source={chidinh} />
                  </View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Chống chỉ định
                    </Text>
                    <RenderHtml contentWidth={width} source={chongchidinh} />
                  </View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Liều dùng
                    </Text>
                    <RenderHtml contentWidth={width} source={lieudung} />
                  </View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Tác dụng phụ
                    </Text>
                    <RenderHtml contentWidth={width} source={tacdungphu} />
                  </View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Thận trọng
                    </Text>
                    <RenderHtml contentWidth={width} source={thantrong} />
                  </View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Tương tác thuốc
                    </Text>
                    <RenderHtml contentWidth={width} source={tuongtacthuoc} />
                  </View>
                  <View>
                    <Text
                      style={{color: 'green', fontSize: 20, fontWeight: 600}}>
                      Bảo quản
                    </Text>
                    <RenderHtml contentWidth={width} source={baoquan} />
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  giaban: {
    width: 250,
    height: 30,
    backgroundColor: '#eefcee',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: '#c5e6cc',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
});
export default Sanpham_chitiet;
