import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Firstpage from './Components/Firstpage.jsx';
import Secondpage from './Components/Secondpage.jsx';

function App() {
  return (
    <div className="App"> 
    <Routes>
          <Route path="/" element={<Firstpage/>} />
          <Route path="/display" element={<Secondpage/>} />
    </Routes>
      </div>
      
  );
}

export default App;
