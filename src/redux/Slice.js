import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Thunk trong lập trình là một thuật ngữ dùng để chỉ một hàm được sử dụng như một đối số để trì hoãn việc tính toán.
// Trong ngữ cảnh của Redux, thunk thường là một hàm trả về một hàm khác.
// Redux Thunk là một middleware cho Redux cho phép bạn viết các action creators trả về một hàm thay vì một đối tượng action.
//  Thông thường, các action creators chỉ có thể trả về các đối tượng (actions), 
// nhưng khi sử dụng Redux Thunk, bạn có thể viết các action creators trả về một hàm có thể thực hiện các tác vụ bất đồng bộ (như gọi API) trước khi dispatch một action thông thường.

// Ví dụ ; Trong đoạn mã trên, fetchXeMays là một thunk. 
//Thay vì trả về một đối tượng action thông thường, nó trả về một hàm bất đồng bộ (async) để thực hiện một yêu cầu API. Khi API hoàn tất, 
//dữ liệu sẽ được trả về và Redux sẽ xử lý nó thông qua các case được xác định trong extraReducers
// URL API
//------------------------------------------------------------//
//Trong trường hợp này, bạn sử dụng export để xuất các thunk 
//(fetchXeMays, addXeMay, updateXeMay, chuc_nang_xoa) và SinhVienSlice.reducer để có thể sử dụng chúng ở các nơi khác trong ứng dụng của bạn.
//------------------------------------------------------------//
//createSlice là một hàm từ @reduxjs/toolkit giúp bạn dễ dàng tạo ra các slice của Redux store. Một "slice" bao gồm reducer và state ban đầu của nó, 
//cũng như các action creators tự động được tạo dựa trên các reducers bạn định nghĩa.

//createSlice nhận một đối tượng chứa các thuộc tính như:
// name: Tên của slice. Đây là tên duy nhất giúp phân biệt slice này với các slice khác trong store.
// initialState: Trạng thái ban đầu của slice.
// reducers: Nơi bạn định nghĩa các hàm để xử lý các action trong slice này.
// extraReducers: Dùng để xử lý các actions không được tạo ra bởi reducers trong slice này, thường là các actions từ createAsyncThunk.
//-----------------------------------------------------------//
// extraReducers cho phép slice xử lý các actions được tạo ra từ bên ngoài (như từ các thunk). 
// Khi một thunk được gọi, nó sẽ trải qua các trạng thái pending, fulfilled, và rejected,
//  và bạn có thể sử dụng extraReducers để xử lý các trạng thái này.
const API_URL = 'http://192.168.53.97:3000/QLDiem_PH36406';

// Thunk lấy danh sách xe
export const lay_ds = createAsyncThunk('QLDiem/lay_ds', async () => {
  console.log('lay_ds: Bắt đầu lấy danh sách xe từ API');
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log('lay_ds: Dữ liệu nhận được từ API:', data);
  return data;
});

// Thunk thêm mới 
// export const chuc_nang_them = createAsyncThunk('sinhVien/chuc_nang_them', async (newSinhVien) => {
//   console.log('chuc_nang_them: Bắt đầu thêm xe mới:', newSinhVien);
//   const response = await fetch(API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newSinhVien),
//   });
//   const data = await response.json();
//   console.log('chuc_nang_them: Xe mới đã được thêm vào API:', data);
//   return data;
// });

// // Thunk cập nhật 
// export const chuc_nang_cap_nhat = createAsyncThunk('sinhVien/chuc_nang_cap_nhat', async (updatedSinhVien) => {
//   console.log('updateXeMay: Bắt đầu cập nhật xe:', updatedSinhVien);
//   const response = await fetch(`${API_URL}/${updatedSinhVien.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedSinhVien),
//   });
//   const data = await response.json();
//   console.log('updateXeMay: Xe đã được cập nhật trên API:', data);
//   return data;
// });

// // Thunk xóa 
// export const chuc_nang_xoa = createAsyncThunk('xeMay/chuc_nang_xoa', async (id) => {
//   console.log(`chuc_nang_xoa: Bắt đầu xóa xe với id: ${id}`);
//   await fetch(`${API_URL}/${id}`, {
//     method: 'DELETE',
//   });
//   console.log(`chuc_nang_xoa: Xe với id: ${id} đã được xóa khỏi API`);
//   return id;
// });

const SinhVienSlice = createSlice({
  name: 'QLDiem',
  initialState: {
    QKDiems: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý fetchXeMays
      .addCase(lay_ds.pending, (state) => {
        console.log('lay_ds.pending: Đang lấy danh sách...');
        state.loading = true;
      })
      .addCase(lay_ds.fulfilled, (state, action) => {
        console.log('lay_ds.fulfilled: Lấy danh sách thành công');
        state.loading = false;
        state.xeMays = action.payload;
      })
      .addCase(lay_ds.rejected, (state, action) => {
        console.error('lay_ds.rejected: Lỗi khi lấy danh sách :', action.error.message);
        state.loading = false;
        state.error = action.error.message;
      })
      // Xử lý addXeMay
//       .addCase(chuc_nang_them.fulfilled, (state, action) => {
//         console.log('chuc_nang_them.fulfilled: Thêm xe mới thành công:', action.payload);
//         state.sinhViens.push(action.payload);
//       })
//       // Xử lý updateXeMay
//       .addCase(chuc_nang_cap_nhat.fulfilled, (state, action) => {
//         console.log('chuc_nang_cap_nhat.fulfilled: Cập nhật xe thành công:', action.payload);
//         const index = state.sinhViens.findIndex((sinh_vien) => sinh_vien.id === action.payload.id);
//         if (index !== -1) {
//           state.sinhViens[index] = action.payload;
//         }
//       })
//       // Xử lý deleteXeMay
//       .addCase(chuc_nang_xoa.fulfilled, (state, action) => {
// console.log(`chuc_nang_xoa.fulfilled: Xóa xe thành công với id: ${action.payload}`);
//         state.sinhViens = state.sinhViens.filter((sinh_vien) => sinh_vien.id !== action.payload);
//       });
  },
});

export default SinhVienSlice.reducer;