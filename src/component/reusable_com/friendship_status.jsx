import axios from "axios"
import { useSelector } from "react-redux"

// we pass [userData,setUserData] 
const FriendShipStatus = ({userData,setUserData}) => {
    const text = {
        1:"follow",
        2:"following",
        3:"requested"
    }
  return (
    <div>
      { userData.status==null ?<Btn text={text[1]} userData={userData} setUserData={setUserData} />: userData.status==true?<Btn text={text[2]} userData={userData} setUserData={setUserData} />: <Btn text={text[3]} userData={userData} setUserData={setUserData} /> }
    </div>
  )
}
const Btn = ({text,userData, setUserData}) =>{
  const userId = useSelector(state=>state.user.data.id);
  const links = {
    "follow": `http://localhost:2551/friendship/followUser?userId=${userId}&followedId=${userData.id}` ,   //to send follow request
    "following": `http://localhost:2551/friendship/unfollowUser?userId=${userId}&followId=${userData.id}`  //to send following request
  }
  async function handleAsyncCall()  //on button click update
  {
    try{
       if(text == "follow"){
         await axios.get(links.follow)
         const {data} = await axios.get(`http://localhost:2551/user/search/profile/${userData.username}/${userId}`);
         console.log("-->userProfile->",data.data);
         setUserData(data.data);
       }
       else if(text == "following"){
        await axios.get(links.following)
        const {data} = await axios.get(`http://localhost:2551/user/search/profile/${userData.username}/${userId}`);
        console.log("-->userProfile->",data.data);
        setUserData(data.data);
       }
    }catch(err){
      console.log(err)
    }
  }
    return (
        <>
           <button className='btn-primary-sm' onClick={()=>handleAsyncCall()}  >{text}</button>
        </>
    )
}

export default FriendShipStatus
