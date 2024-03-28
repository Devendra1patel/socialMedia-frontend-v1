import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from './slice/userSlice.jsx'
import AllFollowedUser from './slice/AllFollowedUserSlice.jsx'
import CurrentChatSlice from './slice/currentChatSlice.jsx'

export const store = configureStore({
  reducer: {
    user:UserSlice,
    allFollowingUser:AllFollowedUser,
    currentChat:CurrentChatSlice
  },
})