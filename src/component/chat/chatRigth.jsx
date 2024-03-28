import { IoSend } from "react-icons/io5";
import Body from "./Body";
import { useEffect, useState } from "react";
import {  useDispatch, useSelector} from "react-redux";
import { add_chatId, add_followId, add_mess_data, add_user_data, append_messages, sendMess_withUpdate } from "../../redux/slice/currentChatSlice";
import axios from "axios";

import { io } from "socket.io-client";

// import {io} from 'socket.io-client';
const ChatRigth = () => {
  const [ singleMessage,setSingleMessage] = useState({
    // "content":'',
    // "time":'',
    // "sender":''
      "userId":null,
      "followId":null,
      "text":"",
      "sender":null 
  });
  const [store, setStore] = useState({
    followId: -1 ,
    messages:[]
  });  
  const followId = useSelector(state=>state.currentChat.followId);
  const followUsername = useSelector(state=>state.currentChat.followUsername);
  const userId = useSelector(state=>state.user.data.id);
  const dispatch = useDispatch();
 
  useEffect( ()=>{
    
    async function fetch_follow_user(){
      
      const  user_data  = await axios.get(`http://localhost:2551/user/search?followUsername=${followUsername}&userId=${userId}`);
      if(user_data.data.status){
        dispatch(add_user_data(user_data.data.data));
        dispatch(add_followId(user_data.data.data.id));
        setStore(store=>({...store,followId:user_data.data.data.id}))
        const mess_data = await axios.get(`http://localhost:2551/message/getAllMessges?userId=${userId}&followId=${user_data.data.data.id}`);
        dispatch(add_chatId(mess_data.data.chatId));
        console.log("currentSlice-->",mess_data.data);
        if(mess_data.data.status){
        dispatch(add_mess_data(mess_data.data.data));
        setStore(store=>({...store,messages:mess_data.data.data}));
      }
      setSingleMessage(state=>({...state,userId:userId,followId:followId,sender:userId}))
      }
    }
     fetch_follow_user();
    },[dispatch]);
    
   
  

  return (
    <div>
      { store.followId !== -1 &&
      <div className="bg-yellow-400 w-4/5 h-screen mx-auto " >
        <Body Allmessages={store.messages} userId={userId} followId={followId} />
        <InputMessage store={store} setStore={setStore} singleMessage={singleMessage} setSingleMessage={setSingleMessage} />
      </div>

    }
</div>
  )
}

// eslint-disable-next-line react/prop-types
function InputMessage({singleMessage, setSingleMessage, store, setStore}){

  const socket = io('http://localhost:2551/');
  const dispatch = useDispatch();
  const userId = useSelector(state=>state.user.data.id);
  const followId = useSelector(state=>state.currentChat.followId);
  const chatId = useSelector(state=>state.currentChat.chatId);

  function handleSendMess()   //pending to rigth logic
  {
    // dispatch(sendMess_withUpdate({singleMessage})) //need to uncomment
    // socket.emit("test1",singleMessage.text);
    append_messages({...singleMessage});
    socket.emit("test2",{
      "chatId":chatId,
      "message":singleMessage
    })
    console.log("-->sendmess=",singleMessage);
    setSingleMessage({...singleMessage,"text": ''});
  }
  useEffect(()=>{
      socket.on("connect", () => {
        console.log("socket connected"); // x8WIv7-mJelg7on_ALbx
      })
    socket.emit("join-room",chatId)
  },[]);

  useEffect(()=>{
    // socket.on(`test2-${singleMessage.userId}`,(data)=>{
    //   // setStore({...store,"messages":[...store.messages].push(data)})
    //   append_messages({...singleMessage});
    //   console.log("-=>",data);
    // })
    
    socket.on("disconnect", () => {
      console.log("socket disconnected"); // undefined
    });
  },[socket]);

  return (
    <div className="flex mx-5 my-3 justify-between">
              <input className="w-full bg-white h-8 rounded-sm" value={singleMessage.text} onChange={(e)=>setSingleMessage({...singleMessage,"text": e.target.value})} ></input>
              <button className="my-auto mx-auto p-2 text-2xl active:text-blue-500 " >
                  <IoSend onClick={()=>handleSendMess()} className="font-medium" />
              </button>
        </div>
  )
}
export default ChatRigth
