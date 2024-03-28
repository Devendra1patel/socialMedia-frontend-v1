import { useEffect } from 'react';
import {useSelector} from 'react-redux'

const Profile = () => {
  const userData = useSelector(state => state.user.data);
  // useEffect(()=>{
  //   console.log(userData);
  // },[userData])
  return (
    <div className="bg-yellow-300 w-3/6 mx-auto h-screen grid justify-items-center content-around	">
        <img className="w-60 h-60 rounded-full" src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"></img>
        <table className="w-4/6">
          <tbody>
            <tr className="bg-slate-500  " >
              <td>Username :-</td>
              <td>{userData.username}</td>
            </tr>
            <tr>
              <td>Name :-</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Gmail :-</td>
              <td>{userData.gmail}</td>
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
