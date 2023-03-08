import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Content from './Components/Content';
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import VideoPlayer from './Components/VideoPlayer';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path="/Content" element={<Content/>}/>
    <Route path="/video/:videoid" element={<VideoPlayer/>}/>
  </Routes>
  );
}

export default App;
