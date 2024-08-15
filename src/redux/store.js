import { configureStore } from '@reduxjs/toolkit';
import QLDiemReducer from './Slice';
//1
// configureStore là một hàm từ @reduxjs/toolkit, giúp bạn dễ dàng cấu hình một Redux store với các thiết lập mặc định được tối ưu hóa.
// Nó giúp giảm bớt sự phức tạp trong việc thiết lập một store so với cách truyền thống.
// configureStore tự động thiết lập middleware mặc định (như redux-thunk để xử lý các hành động bất đồng bộ) và tích hợp Redux DevTools,
// giúp bạn dễ dàng theo dõi trạng thái ứng dụng trong quá trình phát triển.

//2
//reducer là một hàm giúp quản lý trạng thái của ứng dụng. 
// Nó nhận vào trạng thái hiện tại và một action, sau đó trả về trạng thái mới dựa trên action đó.
// Trong đoạn mã của bạn, XeMayReducer được import từ XeMaySlice. 
// Đây là một phần của Redux slice, nơi bạn định nghĩa các hành động và cách mà các hành động này thay đổi trạng thái ứng dụng.

//3
//Khi bạn cấu hình store với configureStore, bạn sẽ cung cấp các reducer cho store. Trong ví dụ này, bạn có một reducer duy nhất là XeMayReducer, được đặt dưới khóa xeMay.
// Điều này có nghĩa là trạng thái của XeMayReducer sẽ được lưu trữ dưới state.xeMay trong Redux store.
//Nếu bạn có nhiều slice khác nhau trong ứng dụng, bạn có thể thêm nhiều reducer vào configureStore như sau:
//Ví dụ const store = configureStore({
//   reducer: {
//     xeMay: XeMayReducer,
//     banner: BannerReducer,
//     user: UserReducer,
//   },
// });


const store = configureStore({
  reducer: {
    QLDiem: QLDiemReducer,
  },
});

export default store;