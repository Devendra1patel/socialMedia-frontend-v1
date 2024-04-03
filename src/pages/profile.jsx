import axios from 'axios';
import {  useState } from 'react';
import {useSelector} from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.user.data);
  const [image_upload_state,setImage_upload_state] = useState(false)
  const [imageSubmit,setImageSubmit] = useState(null)
  // useEffect(()=>{
  //   console.log(userData);
  // },[userData])

  function handleImage(e)
  {
    e.preventdefault;
    setImage_upload_state(image_upload_state=>!image_upload_state);
    console.log("jello");
  }
  async function changeImage(){
    console.log("hello");
    const formData = new FormData();
    formData.append('file',imageSubmit);
    const {data} = await axios.post("http://localhost:2551/user/addprofilepic",formData);
    setImageSubmit(null)
  }
  return (
    <div className="bg-yellow-300 w-3/6 mx-auto h-screen grid justify-items-center content-around	">
      <div className="w-fit h-fit"  >
      <img onClick={(e)=>handleImage(e)} className='w-60 h-60 rounded-full' src={user.profile_pic==null?"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U":user.profile_pic} alt="No Profile" ></img>
      {  image_upload_state==true &&
        <div className='absolute bg-lime-300'>
          <input type="file" onChange={(e)=>{setImageSubmit(e.target.files[0])}} ></input>
          <button onClick={()=>changeImage()} >Change</button>
        </div>
      }
      </div>
        <table className="w-4/6">
          <tbody>
            <tr className="bg-slate-500  " >
              <td>Username :-</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>Name :-</td>
              <td>{user.fullname}</td>
            </tr>
            <tr>
              <td>Gmail :-</td>
              <td>{user.email}</td>
            </tr>
            {/* <tr>
              <td>dummy :-</td>
              <td>Devpalika</td>
            </tr> */}
          </tbody>
        </table>
    </div>
  )
}

export default Profile
