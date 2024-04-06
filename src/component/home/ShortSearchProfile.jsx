/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FriendShipStatus from '../reusable_com/friendship_status';

const ShortSearchProfile = ({serachedData, setSearchedData}) => {
  const navigate = useNavigate();
    console.log("userdata",serachedData);
    // const text = {
    //     1:"follow",
    //     2:"following",
    //     3:"requested"
    // }
  function openProfile()
  {
    // console.log("navigation ran--",serachedData.id)
    navigate(`/profile/${serachedData.username}`);
  }

  return (
    <>
    { serachedData ?
      <div className="flex justify-around items-center bg-blue-300 my-5 py w-full " onClick={()=>openProfile()}>
              <img
                className="w-12 h-12 rounded-full ml-3"
                src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
              ></img>
              <div className="ml-5">
                <h2 className="font-semibold">
                  {/* {data != null ? data.username : "Devendra1_0"} */}
                  {/* Devenddra */}
                  {serachedData.username}
                </h2>
                <p>{serachedData.fullname}</p>
              </div>
              <FriendShipStatus status={serachedData.status} userData={serachedData} setUserData={setSearchedData} />
      </div>
      :
      <h4>User Not Found</h4>
    }
    </>
  )
}


export default ShortSearchProfile
