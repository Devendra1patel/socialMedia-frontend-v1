import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <>
      
    
        <div className="w-screen bg-sky-500 h-10 px-7 flex place-content-between align-middle py-auto ">
          <Link to='/profile'>
            <img className="w-10 h-10 rounded-full" src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"></img>
          </Link>
          <span className="text-white" >Logout &gt;</span>
        </div>
      
    </>
  )
}

export default Navbar
