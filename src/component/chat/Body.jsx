// import { useRef } from "react"
// import { useSelector } from "react-redux";
const Body = ({setStore, store, userId, followId}) => {
  
  // const Allmessages_ = useSelector(state=>state.currentChat.messages);

  return (
    <div className="w-5/6 h-5/6 bg-slate-200 mx-auto flex-col overflow-y-auto" >
      {/* <button className="bg-slate-700 active:scale-125 " onClick={(e)=>{testFun(e)}} >TestBtn</button>
      <h1>{testRef.current}</h1> */}
      {/* Body */} 
      { 
        [...store].map((ele,index)=>{
          const time = new Date(ele.sended_time);
          console.log("--->store.ele-",ele,index)
          return (
            <>
              <div key={index+(new Date())} className={ele.sender==userId?"bg-blue-300 flex justify-between":"bg-red-300 flex justify-between"}>
                <div className="flex" >
                  <h1 className="font-semibold">{ele.sender}</h1>
                  <span>-</span>
                  <p>{ele.text}</p>
                </div>
                <span className="font-thin text-xs" >{time.toLocaleTimeString()}</span>
      
              </div>
             </>
          )
        })
      }
    </div>
  )
}

export default Body
