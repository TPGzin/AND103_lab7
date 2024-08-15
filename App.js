import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// Import các màn hình
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();
//Định nghĩa : Provider
// Provider là một component đặc biệt được cung cấp bởi thư viện react-redux.
// Nó có nhiệm vụ kết nối Redux với ứng dụng React của bạn.
// Provider bao bọc toàn bộ ứng dụng của bạn, và cung cấp "store" Redux cho tất cả các component con trong cây component (component tree).
// Nhờ Provider, bất kỳ component nào trong ứng dụng cũng có thể kết nối với "store" thông qua các hook như useSelector và useDispatch.
//Cách thức hoạt động : 
//+ Provider bao bọc ứng dụng:
// Khi bạn sử dụng Provider, bạn đang thông báo cho React rằng toàn bộ ứng dụng sẽ sử dụng Redux để quản lý trạng thái.
// Mọi component bên trong Provider đều có thể truy cập vào Redux store.

//----------------------------------------------------------//

//Định nghĩa : Store
// store là nơi lưu trữ toàn bộ trạng thái của ứng dụng.
// Bạn tạo "store" bằng cách sử dụng configureStore hoặc createStore từ Redux.
// Trong "store", bạn kết hợp tất cả các reducer (hàm xử lý cập nhật trạng thái) để quản lý các phần khác nhau của trạng thái ứng dụng.
//Cách thức hoạt động :
//+store lưu trữ trạng thái:
// store được tạo từ các reducer, và nó lưu trữ trạng thái toàn cục của ứng dụng. 
//Tất cả các component trong ứng dụng có thể kết nối với store để lấy dữ liệu hoặc cập nhật dữ liệu. {ở đây là file store.js}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Thêm Mới' }} />
          <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Sửa Thông Tin Xe' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
