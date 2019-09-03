import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/welcome' render={ () => (<Login />) }/>
        {/* <Route path='/home' render={ () => (<Home />) } /> */}
      </Switch>
      <Footer />
    </div>
  );
}
      

export default App;
