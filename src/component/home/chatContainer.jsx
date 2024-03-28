import { useDispatch, useSelector } from "react-redux";
import ContainerChat from "./ContainerChat"
import Searchbar from "./Serachbar"
// import { useEffect } from "react";
import { fetchAllFollowing } from "../../redux/slice/AllFollowedUserSlice";

const ChatContainer = () => {
  const data = useSelector( state => state.user.data);
  console.log("chatcontainer->",data)
  const dispatch = useDispatch();
  dispatch(fetchAllFollowing(data.id));
  // useEffect(() => {
  // });
  return (
    <div className="w-3/6 bg-yellow-300 h-screen mx-auto  ">
      <Searchbar/>
      <ContainerChat/>
      <br></br>
    </div>
  )
}

export default ChatContainer
