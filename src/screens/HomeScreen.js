import React, { useEffect } from 'react';
import { View, FlatList, Text, Button, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { lay_ds } from '../redux/Slice';
import Banner from '../components/Banner';
import Item from '../components/Item';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { QLDiems, loading } = useSelector(state => state.QLDiem);

  // Gọi API lấy danh sách xe khi component được mount
  useEffect(() => {
    dispatch(lay_ds());
  }, [dispatch]);

  // Hàm xử lý làm mới dữ liệu
  const onRefresh = () => {
    dispatch(lay_ds());
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Hiển thị banner quảng cáo */}
      <Banner />

      {/* Danh sách xe */}
      <FlatList
        data={QLDiems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item QLDiem={item} navigation={navigation} />
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />

      {/* Nút thêm mới */}
      <Button title="Thêm Mới" onPress={() => navigation.navigate('Add')} />
    </View>
  );
};

export default HomeScreen;