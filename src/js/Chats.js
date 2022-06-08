import React from 'react';
import Chat from '../js/Chat';

function Chats() {
  return (
    <div className='chats'>
      <Chat 
         name ="Aarya"
         message="Hey! how are you"
         timestamp="35 minutes ago"
         profilePic="https://yt3.ggpht.com/ytc/AKedOLStCRhXN6RXKSRdKunCivFFQ76fHsVLElmUK61LvA=s900-c-k-c0x00ffffff-no-rj"
      />
      <Chat 
         name ="Geetha"
         message="Whats up ?"
         timestamp="55 minutes ago"
         profilePic="https://im.idiva.com/content/2022/May/amp-Actress-Kajal-Aggarwal-Accused-Of-Plagiarism-On-Social-Media_6278e186925e2.jpg"
      />
      <Chat 
         name ="Nivi"
         message="Ola!"
         timestamp="3 days ago"
         profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4rPM9W01bAwK0OqxiCTCQv11-GKcE3p00g&usqp=CAU"
      />
      <Chat 
         name ="Rithika"
         message="Oops there is he..."
         timestamp="1 week ago"
         profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7EVLIPiL0AF-MqdGQQ9SLIha2jTdL1mJxQ&usqp=CAU"
      />
    </div>
  )
}

export default Chats