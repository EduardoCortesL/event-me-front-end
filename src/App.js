import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import { Layout, Spin, Space } from 'antd';

//this where here from the template
//import logo from './logo.svg';
import './App.css';
import { Header } from 'antd/lib/layout/layout';

import Home from './Home';

const App = () => {
  return(
     <>
      <Router>
        <Routes>
         <Route exact path="/">
            <Home/>
          </Route>
        </Routes>
      </Router>
    </>
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
