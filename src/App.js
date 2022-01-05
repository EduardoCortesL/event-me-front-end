import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';


//this where here from the template
//import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import EventForm from './pages/eventForm';
import MyEvents from './pages/myEvents';
import Profile from './pages/profile';

const App = () => {
  return(
     <div className="App">
       <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventForm" element={<EventForm />}/>
            <Route path="/myEvents" element={<MyEvents />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
     </div>
  );
};

/** 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
