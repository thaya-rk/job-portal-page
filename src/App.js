import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import FindTalent from './pages/Other/FindTalent';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/findtalent" element={<FindTalent/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
