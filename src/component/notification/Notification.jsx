import axios from "axios";
import { useEffect, useState } from "react"
import {useSelector} from "react-redux"
import { avatarEmpty } from "../../assets/assest";

const Notification = () => {
  const [acceptableUsers,setAcceptableUsers] = useState(null)
  const userId = useSelector(state=>state.user.data.id);

  useEffect(()=>{
    axios.get(`http://localhost:2551/friendship/getAllAcceptableRequest/${userId}`)
        .then((data)=>{
            console.log("--<acceptabl User-",data.data.data);
            setAcceptableUsers(data.data.data)
        })
        .catch((err)=>{
            console.log(err);
            setAcceptableUsers(null);
        })
  },[]);  

  function handleAcceptbtn(followId){
     axios.get(`http://localhost:2551/friendship/accept?userId=${userId}&followId=${followId}`)
          .then((data)=>{
            axios.get(`http://localhost:2551/friendship/getAllAcceptableRequest/${userId}`)
                 .then((data)=>{
                     console.log("--<acceptabl User-",data.data.data);
                     setAcceptableUsers(data.data.data)
                  })
                 .catch((err)=>{
                     console.log(err);
                     setAcceptableUsers(null);
                  })
          })
          .catch((err)=>{
            console.log(err);
          })
  }

  return (
    <div className="bg-yellow-300 border-gray-950 border-x-2 w-2/5 h-screen mx-auto p-5 " >
        {
            acceptableUsers==null 
            ?
            ("loading...")       
            :
            // acceptableUsers.map(ele=>console.log("hellow"))
            acceptableUsers.map((ele, index)=>{
              console.log("-->subData-",ele);
                return(
                <AcceptNotif key={index} data={ele} handleAcceptbtn={handleAcceptbtn}/>
            )})
          }
          {/* <AcceptNotif/> */}
    </div>
  )
}
function AcceptNotif({data,handleAcceptbtn})
{
    console.log("username-",data)
    return (
      <div className="flex justify-between item-center align-middle bg-yellow-200 p-2 mb-2">
        <img className='w-12 h-12 rounded-full ml-3' src={data.profile_pic==null ? avatarEmpty : data.profile_pic } ></img>
        {/* <div className="ml-5" > */}
          {/* <h2 className="font-semibold">{ data.data ? data.data.username : "Devendra1_0"}</h2> */}
          <h1 className="font-bold" >{data.username}</h1>
        {/* </div> */}
          <button onClick={()=>handleAcceptbtn(data.id)} className="px-5 bg-blue-500 rounded-3xl text-white active:bg-blue-600 font-semibold" >Accept</button>
      </div>
    )
}

export default Notification
