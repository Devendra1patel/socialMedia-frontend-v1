import { useState } from "react";
import { useSelector } from "react-redux";
// import { searchChatuserInfo } from "../../redux/slice/chatuserSlice.jsx";
import ShortSearchProfile from "./ShortSearchProfile.jsx";
import axios from "axios";

const Searchbar = () => {
  const [inputusername,setInputusername] = useState({
    "username":''
  });
  const [serachedData,setSearchedData] = useState({});
  const [showResult,setShowResult] = useState(false);
  // const dispatch = useDispatch();
  const id = useSelector(state=>state.user.data.id);
  
  function handleInputs(e)
  {
    setInputusername({...inputusername, [e.target.name]:e.target.value})
  }
  async function handleSubmit()
  {
    console.log("inputusernamse data ->",inputusername);
    // dispatch(searchChatuserInfo(inputusername));
    try {
      const { data } = await axios.get(`http://localhost:2551/user/search?followUsername=${inputusername.username}&userId=${id}`);
      console.log('Data received:', data.data);
      setSearchedData(data.data);
      setShowResult(true)
      } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }
  return (
    <div className="mx-auto flex py-3 border-black border-b-2">
      <div style={{border:'2px solid blue'}} className="mx-auto w-4/6 h-9 rounde  d border-red-400 flex-col"  >
       <input className="mx-auto w-full h-9 rounded border-x-white" type='text' name="username" onChange={(e)=>handleInputs(e)} ></input>
       { showResult==true &&
        <div className="mx-auto w-full h-9 " style={{position:'relative',background:'white'}}>
         <ShortSearchProfile serachedData={serachedData} onClick={()=>setShowResult(false)}/>
       </div>}
      </div>
       <button className="mx-3 text-2xl" onClick={()=>handleSubmit()}>🔍</button>
    </div>
  )
}

export default Searchbar;
