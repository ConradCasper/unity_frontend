import React from 'react';
import logo from './unity_logo.png';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
}
      

export default App;
