import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home'


export default class App extends Component{
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  


  render(){
    return (
      <div className="App" >
        <NavBar />
        <Switch>
          <Route path='/welcome' render={ () => (<SignUp />) }/>
          <Route path='/home' render={ () => (<Home />) } />
        </Switch>
        
        <Footer />
        
      </div>
    );
  }
}
      


