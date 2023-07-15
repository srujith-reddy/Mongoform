import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Firstpage from './Components/Firstpage.jsx';
import Secondpage from './Components/Secondpage.jsx';
import Thirdpage from './Components/Thirdpage.jsx';

function App() {
  return (
    <div className="App"> 
    <Routes>
          <Route path="/" element={<Firstpage/>} />
          <Route path="somemail" element={<Thirdpage/>} />
    </Routes>
      </div>
      
  );
}

export default App;
