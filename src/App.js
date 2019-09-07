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
      posts: [],
      comments: [],
      likes: [],
      users: [],
      follows: []
    }
  }

  controller = new AbortController()


  resetAppState = () => {
    this.fetchComments()
    this.fetchFollows()
    this.fetchLikes()
    this.fetchPosts()
    this.fetchUsers()
  }

  login = user => {
    localStorage.setItem("current_user", JSON.stringify(user))
    this.resetAppState()
  }

  logout = () => {
    localStorage.clear()
    this.resetAppState()
  }


  fetchPosts = () => {
    fetch(`http://localhost:3000/api/v1/posts`, { signal: this.controller.signal })
    .then(res => res.json())
    .then(data => this.setState({posts: data.posts}))
  }

  fetchComments = () => {
    fetch(`http://localhost:3000/api/v1/comments`, { signal: this.controller.signal })
    .then(res => res.json())
    .then(data => this.setState({comments: data.comments}))
  }

  fetchLikes = () => {
    fetch(`http://localhost:3000/api/v1/likes`, { signal: this.controller.signal })
    .then(res => res.json())
    .then(data => this.setState({likes: data.likes}))
  }

  fetchUsers = () => {
    fetch(`http://localhost:3000/api/v1/users`, { signal: this.controller.signal })
    .then(res => res.json())
    .then(data => this.setState({users: data.users}))
  }

  fetchFollows = () => {
    fetch(`http://localhost:3000/api/v1/follows`, { signal: this.controller.signal })
    .then(res => res.json())
    .then(data => this.setState({follows: data.follows}))
  }


  componentDidMount(){
    this.resetAppState()
  }

  componentWillUnmount(){
    this.controller.abort()
  }





    

  

  


  render(){
    return (
      <div className="App" >
        <NavBar current_user={this.state.current_user} login={this.login} logout={this.logout}/>
        <Switch>
          <Route path='/welcome' render={ () => (<SignUp />) }/>
          <Route path='/home' render={ () => (<Home   posts={this.state.posts} comments={this.state.comments} likes={this.state.likes} users={this.state.users}  resetAppState={this.resetAppState}/>)} />
        </Switch>
        
        <Footer />
        
      </div>
    );
  }
}
      


