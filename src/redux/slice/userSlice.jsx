import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const fetchUserInfo = createAsyncThunk('User/fetchUserInfo', async (sendData) => {
    try {
      const { data } = await axios.post(`http://localhost:2551/user/login`, sendData);
      console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });
  export const createUser = createAsyncThunk('User/createUser', async (sendData) => {
    try {
      const { data } = await axios.post(`http://localhost:5000/user/login`, sendData);
      console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });

const UserSlice = createSlice({
    name: 'User',
    initialState: {
      data: {},
    },
    reducers: {
      add_user_data:(state, {payload})=>{
        state.data = {...payload}
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.data = {...action.payload};
      })
      .addCase(createUser.fulfilled, (state,action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.data = {...action.payload};
      })
    },
  });
  export const { add_user_data } = UserSlice.actions;
  export default UserSlice.reducer ;