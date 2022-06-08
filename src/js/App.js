import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../js/Header';
import TinderCards from '../js/TinderCards';
import SwipeButtons from '../js/SwipeButtons';
import Chats from '../js/Chats';
import ChatScreen from '../js/ChatScreen';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path = "/chat/:person" element={<><Header backButton="/chat" /><ChatScreen /></>}></Route>
        <Route path = "/chat" element={<><Header backButton="/" /><Chats /></>}></Route>
        <Route path = "/" element={<><Header /><TinderCards/><SwipeButtons/></>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
