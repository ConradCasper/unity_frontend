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

  componentDidMount(){
    let token = localStorage.getItem("jwt")
    fetch(`http://localhost:3000/api/v1/posts`,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}` 
        }
    })
    .then(res => res.json())
    .then(posts => this.setState({
        posts: posts
    }))
}


  render(){
    return (
      <div className="App" >
        <NavBar />
        <Switch>
          <Route path='/welcome' render={ () => (<SignUp />) }/>
          <Route path='/home' render={ routerProps => (<Home {...routerProps} posts={this.state.posts}/>) } />
        </Switch>
        
        <Footer />
        
      </div>
    );
  }
}
      


