import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import FriendShipStatus from "../reusable_com/friendship_status";

const ProfileUser = () => {
  const [userData, setUserData] = useState();
  const userId = useSelector(state=>state.user.data.id);
  const {username} = useParams();
  console.log(username);
  useEffect( ()=>{
     async function apiCall()
     {
        try{
            const {data} = await axios.get(`http://localhost:2551/user/search/profile/${username}/${userId}`)
            console.log("-->userProfile->",data);
            setUserData(data.data);
        }catch(err){
            console.log(err);
        }
     }
     apiCall();
  },[]) 
  console.log("userdata-->",userData)
  return (
    <>
    {  userData &&
        <div className="w-screen h-screen bg-yellow-300 flex justify-center" >
        <div className="w-4/5 bg-yellow-400 flex">
            <div className="w-fit h-fit m-5"  >
                <img className='w-60 h-40 rounded-full' src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="No Profile" ></img>
            </div>
            <div className="m-5 w-full" >
                <div className="flex text-2xl text-blue-500 w-4/5 mx-auto" > 
                  <h2 className="font-sans font-bold mr-9" >{userData.username}</h2>
                  <FriendShipStatus userData={userData} setUserData={setUserData}/> 
                </div>
                <div className="flex w-4/5 mt-5 mx-auto">
                    <span className="mr-7" >follower <span className="text-white" >{userData.follower}</span></span>
                    <span className="ml-7">following <span className="text-white" >{userData.following}</span></span>
                </div>
                <div className="w-4/5 mx-auto mt-5">
                    <h1 className="font-semibold" >{userData.fullname}</h1>
                    <p className="font-medium text-sm" >{userData.discription}</p>
                </div>
            </div>    
        </div>
    </div>}
    </>
  )
}

export default ProfileUser
