/* eslint-disable react/prop-types */
import React from 'react'

const ShortSearchProfile = ({serachedData}) => {
    console.log("userdata",serachedData.username);
    const text = {
        1:"follow",
        2:"following",
        3:"requested"
    }
  return (
    <div className="flex justify-around items-center bg-white my-5 py ">
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
            { serachedData.status==null ?<Btn text={text[1]}/>:serachedData.status==true?<Btn text={text[2]}/>: <Btn text={text[3]}/> }
    </div>
  )
}
const Btn = ({text}) =>{
    return (
        <>
           <button className='btn-primary-sm'>{text}</button>
        </>
    )
}

export default ShortSearchProfile
