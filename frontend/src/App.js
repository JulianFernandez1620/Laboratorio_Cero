import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Users} from './elements/Users'
import {About} from './elements/About'
import {Navbar} from './elements/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-1">
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
