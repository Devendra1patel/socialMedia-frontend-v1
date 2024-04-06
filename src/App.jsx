// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Chat from './component/Chat.jsx'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/profile.jsx";
import Auth from "./pages/auth.jsx";
import Navbar from "./component/Navbar.jsx";
import Chat from "./pages/Chat.jsx";
import { useState } from "react";
import ProfileUser from "./component/profile/ProfileUser.jsx";
import Notification from "./component/notification/Notification.jsx";
import FirstHome from "./pages/firstHome.jsx";
// import { set } from "mongoose";

function App() {
  // const [count, setCount] = useState(0)
  const [registerPop, setRegisterPop] = useState(1);
  
  function changeRegisterPop() {
    
    // console.log(registerPop);
    if (registerPop) setRegisterPop(0);
    else setRegisterPop(1);
    // console.log(registerPop);
  }

  return (
    <>
      {registerPop == 1 && <Auth onButton={() => changeRegisterPop()} />}
      {registerPop == 0 && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/message" element={<FirstHome/>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/:username" element={<ProfileUser/>} ></Route> 
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/notification" element={<Notification/>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
