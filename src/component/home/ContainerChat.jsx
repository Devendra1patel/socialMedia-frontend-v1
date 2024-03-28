/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
// import SingleChat from "./SingleChat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchAllFollowing } from "../../redux/slice/AllFollowedUserSlice.jsx";
import { add_followId, add_followUsername, getAllMessages, getUserInfo } from "../../redux/slice/currentChatSlice.jsx";

const ContainerChat = () => {
  const [followingData, setFollowingData] = useState(0);
  let data = useSelector((state) => state.allFollowingUser.data);
  let user_id = useSelector((state) => state.user.data.id);
  const dispatch = useDispatch();
  // data = data.data;
  // setFollowingData(data);
  // console.log("allFollowingUser-->",data,user_id);  //testing
  // const userConsumer = useSelector((state) => state.user.data.username);
  // let inputusersdata = useRef({"userConsumer":userConsumer,"userPartner":data.username});

  function fetch_userInfo_currentChat(username,id)
  {
    dispatch(add_followUsername(username));
    dispatch(add_followId(id));
    // dispatch(getUserInfo({"followUsername":username,"user_id":user_id}))/
    // dispatch(getAllMessages({"userId":user_id,"followId":id}))
  }
  // {/* <SingleChat/> */}
  
  //   // Object.keys(data).length != 0 && 

  return (
    <div className="h-full w-5/6 mx-auto">
            {
               data!=null && data.map((ele)=>{
                return (
                      <Link  key={ele.id} to="/chat" onClick={()=>fetch_userInfo_currentChat(ele.username,ele.id)} >
                                <div className="flex bg-white my-5 ">
                                  <img
                                    className="w-12 h-12 rounded-full ml-3"
                                    src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
                                  ></img>
                                  <div className="ml-5">
                                    <h2 className="font-semibold">
                                      {ele.username ? ele.username : "Devendra1_0"}
                                    </h2>
                                    <p>{ele.fullname}</p>
                                  </div>
                                </div>
                      </Link>  )
            })
          }
      
    </div>
  );
};

export default ContainerChat;
