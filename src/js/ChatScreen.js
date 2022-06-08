import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import '../css/ChatScreen.css';

function ChatScreen() {
  const [input,setInput] = useState('');  
  const [messages, setMessages] = useState([
      {
          name:"Aarya",
          image: "https://yt3.ggpht.com/ytc/AKedOLStCRhXN6RXKSRdKunCivFFQ76fHsVLElmUK61LvA=s900-c-k-c0x00ffffff-no-rj",
          message: "Whats up",
      },
      {
        name:"Aarya",
        image: "https://yt3.ggpht.com/ytc/AKedOLStCRhXN6RXKSRdKunCivFFQ76fHsVLElmUK61LvA=s900-c-k-c0x00ffffff-no-rj",
        message: "How's it going",
      },
      {
          message: "Hi! How are you Aarya!"
      },
  ]);

  const handleSend =  (e) => {
      e.preventDefault();

      setMessages([...messages, {message:input}]);
      setInput('');
  }

  return (
    <div className='chatScreen'>
        <p className='chatScreen_timestamp'>YOU MATCHED WITH AARYA ON 08/06/22</p>
        {messages.map((message) => (
            message.name ? (
                <div className='chatScreen_message'>
                <Avatar 
                  className='chatScreen_image'
                  alt={message.name}
                  src={message.image}
                />
                <p className='chatScreen_text'>{message.message}</p>
            </div>
            ) : (
                <div className='chatScreen_message'>
                <p className='chatScreen_textUser'>{message.message}</p>
            </div>
            )    
        ))};
        <form className='chatScreen_input'>
            <input 
            value={input} 
            onChange={e => setInput(e.target.value)}
            className='chatScreen_inputField' 
            placeholder='Type a message...' 
            type='text' />
            <button onClick={handleSend} type="submit" className='chatScreen_inputButton'>SEND</button>
        </form>
    </div>
  );
}

export default ChatScreen;