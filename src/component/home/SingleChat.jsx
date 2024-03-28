
const SingleChat = (data) => {
  console.log("childe hase data-- ",data);
  return (
    <div className="flex bg-white my-5 " >
      <img className='w-12 h-12 rounded-full ml-3' src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww" ></img>
      <div className="ml-5" >
        <h2 className="font-semibold">{ data.data ? data.data.username : "Devendra1_0"}</h2>
        <p>hey, kya kar rahe</p>
      </div>
    </div>
  )
}

export default SingleChat

