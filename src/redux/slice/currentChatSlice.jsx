import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const getUserInfo = createAsyncThunk('currentChat/getUserInfo', async ({followUsername,user_id}) => {
    try {
      const { data } = await axios.get(`http://localhost:2551/user/search?followUsername=${followUsername}&userId=${user_id}`);
      // console.log('Data received:', data);
      return data.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });
export const getAllMessages = createAsyncThunk('currentChat/getAllMessages', async (prop) => {
    try {
      const { data } = await axios.get(`http://localhost:2551/message/getAllMessges?userId=${prop.userId}&followId=${prop.followId}`);
      // console.log('Data received by getAllMessages:', data);
      return data.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });
export const sendMess_withUpdate = createAsyncThunk('currentChat/sendMess_withUpdate', async (props) => {
    try {
      console.log('Data received by getAllMessages:',props.singleMessage);
      const send_data = await axios.post(`http://localhost:2551/message/send`,{...props.singleMessage});
      const { data } = await axios.get(`http://localhost:2551/message/getAllMessges?userId=${props.singleMessage.userId}&followId=${props.singleMessage.followId}`);
      return data.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  });

const CurrentChatSlice = createSlice({
    name: 'currentChat',
    initialState: {
      followUsername:'',
      userId:-1,
      followId:-1,
      chatId:-1,
      user:{},
      messages: []
    },
    reducers: {
      add_user_data: (state, action)=>{
          state.user = action.payload
      },
      add_followId:(state, action)=>{
        console.log("-->test add_followId-",action.payload);
        state.followId = action.payload
      },
      add_followUsername:(state, action)=>{
        console.log("-->test add_followId-",action.payload);
        state.followUsername = action.payload
      },
      add_chatId:(state, action)=>{
        console.log("-->test chatId-",action.payload);
        state.chatId = action.payload
      },
      add_mess_data:(state, action)=>{
        console.log("-->test mess_data-",action.payload);
        state.messages = action.payload
      },
      append_messages:(state, action)=>{
        console.log("-->test append messages-");
        state.messages = state.messages.push(action.payload); 
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getUserInfo.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.user = action.payload;
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.messages = action.payload;
      })
      .addCase(sendMess_withUpdate.fulfilled, (state, action) => {
        console.log('Data by dispatch findUser:', action.payload);
        state.messages = action.payload;
      })
      
    },
  });
  
  export  const {add_user_data, add_followId,add_followUsername,add_mess_data,add_chatId,append_messages} = CurrentChatSlice.actions;
  export default CurrentChatSlice.reducer ;