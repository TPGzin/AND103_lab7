import React from 'react';
import { View, Text, Image } from 'react-native';

const Banner = () => {
  return (
    <View style={{ marginBottom: 20, alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://inanaz.com.vn/wp-content/uploads/2023/03/mau-banner-quang-cao-dep.jpg' }}
        style={{ width: '100%', height: 150 }}
        resizeMode="cover"
      />
      <Text style={{ position: 'absolute', color: 'white', fontSize: 24, fontWeight: 'bold' }}>
        Khuyến Mãi Đặc Biệt
      </Text>
    </View>
  );
};

export default Banner;
