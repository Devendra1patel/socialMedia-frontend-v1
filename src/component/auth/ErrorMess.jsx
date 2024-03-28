import React from 'react'
import { useSelector } from 'react-redux'
import userSlice from '../../redux/slice/userSlice';

const ErrorMess = ({message}) => {
//    const dataMessage = useSelector(state=>state.user);
//    console.log(dataMessage);
  return (
    <div className='text-red-600 bg-red-200 flex justify-center absolute w-full' >
      {message}
    </div>
  )
}

export default ErrorMess
