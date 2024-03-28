// client/src/Chat.js
import { useState, useEffect } from "react";
import io from "socket.io-client";
import './chat.css';
import { nanoid } from 'nanoid'


const socket = io("http://localhost:5000/"); // Update with your server URL

const Chatt = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  setId(nanoid());

  useEffect(() => {
    // Listen for messages from the server
    socket.on("message", (data) => {
      // setMessages([...messages,data]);
      console.log(data);
    })
    socket.on("reply", (data) => {
      setMessages([...data]);
      console.log(data);
    })
  }, [messages])

  const sendMessage = () => {
    if (message.trim() !== "") {            
      // Send the message to the server
      socket.emit("message", {'message':message,'id':id});
      setMessage("");
    }
  }
  const joinroom = () =>{
    socket.emit("joinroom","join");
  }

  return (
    <div>
{/* ------------------------- */}
      <div className="container-input" >
          <input className="input-f" type="text"  value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
          />
          <div>
              <button className="button" onClick={sendMessage}>Send</button>
              <button className="button" onClick={joinroom}>join</button>

          </div>
      </div>
{/* ----------------------------- */}
      <div className="container-chat-mess" >

        <div id="chat">
          {
          messages.map((msg, index) => (
            <h3 className="chat-p" key={index}>{msg}</h3>
          ))
          }
        </div>

      </div>

    </div>
  );
}

export default Chatt;
