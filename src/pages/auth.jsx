import { useEffect, useReducer, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserInfo , createUser, add_user_data } from "../redux/slice/userSlice.jsx"
import axios from "axios"
import ErrorMess from "../component/auth/ErrorMess.jsx"

const Auth = ({onButton}) => {
  const dispatch = useDispatch()
  
  const [formStatus,setFormStatus] = useState(1);
  const [login,setLogin] = useState({
    "username":"",
    "password":""
  })
  const [singUp,setSingUp] = useState({
    "fullname":"",
    "email":"",
    "username":"",
    "password":""
  })
  const [errorstate, setErrorstate] = useState({
    "status":true,
    "message":""
  })
  
  function statusHandler()
  {
    if(formStatus)
      setFormStatus(0);
    else
      setFormStatus(1)
  }
 

  // user login handler
  async function handleLoginDispatch(e)
  {
    e.preventDefault()
    // dispatch(fetchUserInfo(login));
    // console.log("value of logins-",login)
    // console.log("selector->",data);

    try {
      const { data } = await axios.post(`http://localhost:2551/user/login`, login);
      console.log('Data received:', data);
      if(data.status){
        dispatch(add_user_data(data.data)); 
        onButton()
      }else{
        console.log("helloo login");
        setErrorstate({...data});
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }

  // user SingUp handler
  async function handleSingUpDispatch(e)
  {
    e.preventDefault()
    // dispatch(createUser(singUp));
    // console.log("value of logins-",login);

    try {
      const { data } = await axios.post(`http://localhost:2551/user/register`, singUp);
      console.log('Data received:', data);
      if(data.status){
        dispatch(add_user_data(data.data)); 
        onButton()
      }
      else{
        setErrorstate({...data});
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }

  function handleLoginInputs(e)
  {
    setLogin({...login,[e.target.name]:e.target.value})
  }
  function handleSingUpInputs(e)
  {
    setSingUp({...singUp,[e.target.name]:e.target.value})
  }
  

  return (
    <div className="w-screen h-screen grid place-content-center">
       {/* <button onClick={()=>onButton()} >button</button>  for experiment in emergency to go home page without login  */} 
       <div className="h-full w-80 bg-yellow-300 rounded-xl hover:shadow-2xl shadow-black">
           {
              formStatus == 1 &&
                <form method="get" className="flex-col grid justify-items-center " >
                    
                    <input className="w-5/6 grid m-2 " type="text" placeholder="Username" name="username" onChange={(e)=>handleLoginInputs(e)} ></input>
                    <input className="w-5/6 m-2" type="password" placeholder="Password" name="password" onChange={(e)=>handleLoginInputs(e)} ></input>
                    <button className="w-5/6 m-2 bg-sky-500" onClick={(e)=>handleLoginDispatch(e)} >Login</button>
                    <span className="text-white m-3 cursor-pointer" onClick={()=>statusHandler()} >?Create new user</span>
                </form>
          }
          {
              formStatus == 0 &&
                <form className="flex-col grid justify-items-center " >
                    <input className="w-5/6 grid m-2 " type="text" placeholder="Full Name" name="fullname" onChange={(e)=>handleSingUpInputs(e)}></input>
                    <input className="w-5/6 grid m-2 " type="text" placeholder="Email" name="email" onChange={(e)=>handleSingUpInputs(e)}></input>
                    <input className="w-5/6 grid m-2 " type="text" placeholder="Username" name="username" onChange={(e)=>handleSingUpInputs(e)}></input>
                    <input className="w-5/6 m-2" type="password" placeholder="Password" name="password" onChange={(e)=>handleSingUpInputs(e)}></input>
                    <button className=" bg-sky-500" onClick={(e)=>{handleSingUpDispatch(e)}} >Sing Up</button>
                    <span className="text-white m-3 cursor-pointer" onClick={()=>statusHandler()}>?LogIn</span>
                </form>
          }
       </div>
       {
        errorstate.status == false && 
        <ErrorMess message={errorstate.message} />
        }
    </div>
  )
}

export default Auth
