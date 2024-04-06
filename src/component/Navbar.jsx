import { Link, useNavigate } from "react-router-dom"
import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  function handleAccepableUserList(){
      navigate('/notification');
  }

  return (
    <>
        {/* <div className="w-screen bg-sky-500 h-10 px-7 align-center items-center gap-7 flex flex-row-reverse "> */}
        <div className="w-screen bg-sky-500 h-10 px-7 flex justify-between">
           <ul className="flex gap-3 align-center items-center font-sans font-semibold " >
             <Link to='/message' className="hover:text-white active:text-slate-300 " >Home</Link>
             <Link to='/' className="hover:text-white active:text-slate-300" >Message</Link>
           </ul>
           <div className=" flex flex-row-reverse gap-7 align-center items-center" >
            <Link to='/profile'>
              <img className="w-10 h-10 rounded-full" src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"></img>
            </Link>
            <div className="w-fit h-fit flex-col" >
              <IoIosNotifications className="text-white text-2xl" onClick={()=>handleAccepableUserList()}/>
            </div>
            <span className="text-white" >Logout &gt;</span>
           </div>
        </div>   
    </>
  )
}
function AcceptableUserDropdown(){
  return (
    <>
      
    </>
  )
}

export default Navbar
