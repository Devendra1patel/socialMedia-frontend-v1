import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const searchChatuserInfo = createAsyncThunk('AllFollowedUser/searchChatuserInfo', async (sendData) => {
    try {
      const { data } = await axios.get(`http://localhost:2551/user/search?username=${sendData.username}`);
      // console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });
  export const fetchAllFollowing = createAsyncThunk('AllFollowedUser/fetchAllFollowing', async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:2551/friendship/getAllFollowingUserInfo/${id}`);
      // console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });
const allFollowedUserSlice = createSlice({
    name: 'AllFollowedUser',
    initialState: {
      data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(searchChatuserInfo.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.data = action.payload;
      })
      .addCase(fetchAllFollowing.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.data = action.payload.data;
      })
      
    },
  });
  
  export default allFollowedUserSlice.reducer ;