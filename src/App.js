import React from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
function App() {
  return (
   
      <div className="app">
        <Header />
        <Login/>
        <Home/>
      </div>
  )
}

export default App;
