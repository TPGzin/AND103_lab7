import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
//import { chuc_nang_xoa } from '../redux/Slice';

const Item = ({ QLDiem, navigation }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn xóa item này không?',
      [
        {
          text: 'Không',
          onPress: () => console.log('Hủy xóa'),
          style: 'cancel',
        },
        {
          text: 'Có',
          onPress: () => {
            dispatch(chuc_nang_xoa(QLDiem_PH36406.id));
            console.log('Xe đã bị xóa');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: QLDiem.hinh_anh_PH36406 }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{QLDiem.hoten_PH36406}</Text>
        <Text>{QLDiem.tong_ket_PH36406}</Text>
        
      </View>
      <View style={styles.buttons}>
        <Button
          title="Sửa"
          onPress={() => navigation.navigate('Edit', { QLDiem })}
        />
        <Button
          title="Xóa"
          color="red"
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttons: {
    justifyContent: 'space-around',
  },
});

export default Item;