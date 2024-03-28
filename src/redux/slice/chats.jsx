import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const searchChatuserInfo = createAsyncThunk('Chatuser/searchChatuserInfo', async (sendData) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/searchUser?username=${sendData.username}`);
      console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });

const ChatuserSlice = createSlice({
    name: 'Chatuser',
    initialState: {
      chat: {},
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(searchChatuserInfo.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.data = action.payload;
      })
      
    },
  });
  
  export default ChatuserSlice.reducer ;