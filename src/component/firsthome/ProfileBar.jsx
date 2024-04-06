import React from 'react'
import { avatarEmpty } from '../../assets/assest'
import './tmp.css'

const ProfileBar = () => {
  return (
    <div className='flex gap-2 overflow-x-auto scrollbar-profile py-2' > 
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
  )
}
function Profile()
{
    return (
        <div className='w-fit h-fit '  >
          <img className='rounded-full' style={{"width":'66px',"height":'66px'}} src={avatarEmpty} alt="img"/>
          <p className='text-sm font-sans font-bold' >Username</p>
        </div>
    )
}

export default ProfileBar
