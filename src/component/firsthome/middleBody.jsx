import React from 'react'
import ProfileBar from './ProfileBar';
import PostBody from './postBody';

const MiddleBody = () => {
  return (
    <div className='mx-auto w-3/5 bg-yellow-200 h-full b-x-2 border-black drop-shadow-lg' >
        <ProfileBar/>
        <hr className = "text-black bg-black h-0.5 " ></hr>
        <PostBody/>
    </div>
  )
}

export default MiddleBody;
