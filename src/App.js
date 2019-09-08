import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './containers/Home'
import Profile from './components/user/Profile'
import './index.css'


class App extends Component{
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
    this.props.history.push("/welcome")
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
        <NavBar login={this.login} logout={this.logout}/>
        <Switch>
          
          <Route exact path="/welcome" render={() => ( localStorage.length === 0 ? (<SignUp />)  : (<Redirect to="/home"/>) )}/>
          <Route path='/home' render={ () => (<Home   posts={this.state.posts} follows={this.state.follows} comments={this.state.comments} likes={this.state.likes} users={this.state.users}  resetAppState={this.resetAppState}/>)} />
          <Route path='/profile' render={ () => (<Profile posts={this.state.posts} follows={this.state.follows} comments={this.state.comments} likes={this.state.likes} users={this.state.users}  resetAppState={this.resetAppState}/>)} />) } />
          
        </Switch>
        
        <Footer />
        
      </div>
    );
  }
}
      


export default withRouter(App);